import React, { useEffect, useMemo, useState, useRef } from 'react';
import { ActivityIndicator, FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, View, useColorScheme,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TaskCard } from './src/components/TaskCard';
import { useTaskStats } from './src/hooks/useTaskStats';
import { fakeLatency, fetchRemoteTasks } from './src/services/taskService';
import { Task, initialTasks } from './src/types/task';
import { filterTasks, pickTaskById, sortByPriority } from './src/utils/taskFilters';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(1);
  console.log('tasks:', tasks);
  
  // add the sprev => prev + 1 instant of second + 1
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1 );
    }, 1000);
    return () => clearInterval(timer);
  }, []);


const hasFetched = useRef(false);

useEffect(() => {
  if (hasFetched.current) return;
  hasFetched.current = true;

  setLoading(true);
  fakeLatency(500)
    .then(fetchRemoteTasks)
    .then(remoteTasks => {
      setTasks(prev => sortByPriority([...prev, ...remoteTasks]));
      setLoading(false);
    });
}, []);

  
  console.log('Rendering App with tasks:', tasks);

  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, query);
  }, [tasks, query]);

  const stats = useTaskStats(tasks, seconds);
  console.log('selectedTaskId', selectedTaskId, 'stats:', stats);
  const selectedTask = pickTaskById(tasks, selectedTaskId);

  // const toggleTask = (taskId: number) => {
  //   const task = tasks.find(item => item.id === taskId);
  //   if (task) {
  //     task.done = !task.done;
  //     setTasks(tasks);
  //   }
  // };
const toggleTask = (taskId: number) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    )
  );
};
  
  const addTask = () => {

    if (!query.trim()) return;

    const newItem: Task = {
      id: Date.now(),
      title: query,
      done: false,
      priority: 1,
      createdAt: Date.now(),
    };
    setTasks(prev => [newItem, ...prev]);
    setQuery('');
  };


  
  const deleteFirstTask = () => {
    console.log('Delete Press')
    console.log('Total Tasks:', tasks.length, 'Tasks:', tasks);
    setTasks(prev => prev.slice(1));
  };



  return (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, isDarkMode && styles.dark]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.heading, isDarkMode && styles.darkText]}>
        Debug Playground
      </Text>
      <Text style={[styles.meta, isDarkMode && styles.darkText]}>
        Timer: {seconds}s | Completion: {stats.completionRate}% | {stats.tickLabel}
      </Text>

      <TextInput
        placeholder="Search or add task"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        style={[styles.input, isDarkMode && styles.inputDark]}
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.row}>
        <Pressable style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={deleteFirstTask}>
          <Text style={styles.buttonText}>Delete First</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#7a42f4" />
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onPress={(taskId: number) => {
                toggleTask(taskId);
                setSelectedTaskId(taskId);
              }}
              onLongPress={() => toggleTask(item.id)}
            />
          )}
        />

        
      )}

      <View style={styles.detailBox}>
        <Text style={styles.detailHeading}>Selected Task Detail</Text>
        <Text style={styles.detailText}>
          {selectedTask?.title?.toLowerCase() || 'No task selected'}
        </Text>
        <Text style={styles.detailText}>
          Priority score: {selectedTask?.priority ? 10 / selectedTask.priority : 0}
        </Text>
        <Text style={styles.detailText}>
          Top priority task: {stats.highestPriority?.title}
        </Text>
      </View>
    </SafeAreaView>

  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6ff',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  dark: {
    backgroundColor: '#0e0e12',
  },
  darkText: {
    color: '#f3f3f3',
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: '#181818',
  },
  meta: {
    marginTop: 6,
    marginBottom: 12,
    color: '#4a4a4a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7a42f4',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    color: '#101010',
  },
  inputDark: {
    color: '#fff',
    borderColor: '#8f6cf6',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#7a42f4',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  detailBox: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#d8d3ea',
    paddingTop: 10,
  },
  detailHeading: {
    color: '#5f49a5',
    fontWeight: '700',
  },
  detailText: {
    marginTop: 4,
    color: '#323232',
  },
});

export default App;
