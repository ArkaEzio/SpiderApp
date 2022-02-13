import * as React from 'react';
import {useState, useEffect} from 'react';
//import Audio from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,FlatList,TouchableOpacity, Touchable,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {timer} from './components/timer.js'
function alarm() {
  const d=new Date().toLocaleTimeString();
  const [curTime,setCurTime]=useState(d);
  const updateTime=()=> {
    const d=new Date().toLocaleTimeString();
    setCurTime(d);
    //return ({d});
  }
 //setInterval(updateTime,500)
  /*return (
    <View style={styles.container}>
      <Text style={styles.colorChoice}>{d}</Text>
      <StatusBar style="auto" />
    </View>
  );*/
  /*const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./01.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View >
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );*/
}

var p=1;
function StopWatch() {
  const [opi,setopi]=useState(0);
  const [hr,sethr]=useState(0)
  const [min,setmin]=useState(0)
  const [sec,setsec]=useState(0)
  const [milisec,setmilisec]=useState(0)
  const[sptime,setsptime]= useState([])
  const [Inter,setInter]=useState()
  var i=0,j=0,k=0,l=0;
  const SplitList=()=> {
    setsptime([...sptime,{
      key:hr+':'+min+':'+sec+':'+milisec
    }])
    p++;
    //n=0;
    //setk();
  }
  
  function setH() {
    setmilisec(l++)
    setsec(j)
    setmin(i)
    sethr(k)
    if(l==100) {
      l=0;
      j++;
    }
    if(j==60)
    {
      j=0;
      i++;
    }
    if(i==60)
    {
      i=0
      k++;
    }
    if(k!=24);
    //setInter(setTimeout(setH,10))
    else
    {
     // n=0;
      sets(); 
    }
  }
  const setc=()=> {
   // n=0;
    //setH();  
    i=min;
    j=sec;
    k=hr;
    setopi(1);
    setInter(setInterval(setH,10))
  }
  const sets=()=> {
    clearInterval(Inter);
    i=min;
    j=sec;
    k=hr;
    //setmilisec(0);
    setsec(j)
    setmin(i)
    sethr(k)
    setopi(0);
    //setsec(j)
   // if(n+1==1);//{
    //setInter(setInterval(sets,100))}
  }
  const setk=()=> {
    clearInterval(Inter);
    i=min;
    j=sec;
    k=hr;
    setInter(setInterval(setH,10));
   // if(n+1==1);//{
    //n=1;
    //setInter(setInterval(sets,100))}
  }
  const setstop=()=> {
    setsec(0)
    setmin(0)
    sethr(0)
    setopi(0)
    setmilisec(0);
    clearInterval(Inter);
   // if(n+1==1);//{
    //n=1;
    //setInter(setInterval(sets,100))}
  }
  if(opi==0)
  return (
    <View style={styles.container}>
      <Text style={styles.colorChoice}>
        {hr}:{min}:{sec}:{milisec}
      </Text>
      <Button title='Start' onPress={setc}/>
      <Button title='Reset' onPress={setstop}/>
      <Button title='Split' onPress={SplitList}/>
      <FlatList
          data={sptime}
          renderItem={({ item }) => (
              <Text style={styles.listwatch}>{item.key}</Text>
          )} />
    </View>
  )
  else
  return (
    <View style={styles.container}>
      <Text style={styles.colorChoice}>
        {hr}:{min}:{sec}:{milisec}
      </Text>
      <Button title='Pause' onPress={sets}/>
      <Button title='Reset' onPress={setstop}/>
      <Button title='Split' onPress={SplitList}/>
      <FlatList
          data={sptime}
          renderItem={({ item }) => (
              <Text style={styles.listwatch}>{item.key}</Text>
          )} />
    </View>
  )
}

var n=1;
function Timer(){
    const[timemin,settimemin]= useState([
      {key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},
      {key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},
      {key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},
      {key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},
      {key:41},{key:42},{key:43},{key:44},{key:45},{key:46},{key:47},{key:48},{key:49},{key:50},
      {key:51},{key:52},{key:53},{key:54},{key:55},{key:56},{key:57},{key:58},{key:59}]);
    const[timesec,settimesec]= useState([
      {key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},
      {key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},
      {key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},
      {key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},
      {key:41},{key:42},{key:43},{key:44},{key:45},{key:46},{key:47},{key:48},{key:49},{key:50},
      {key:51},{key:52},{key:53},{key:54},{key:55},{key:56},{key:57},{key:58},{key:59}]);
    const[timehr,settimehr]= useState([
      {key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},
      {key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},
      {key:21},{key:22},{key:23}]);   
    const [hr,sethr]=useState(0)//  <TextInput style={styles.timerInput} placeholder='HH'/><Text style={styles.colorTimer}>:</Text><TextInput style={styles.timerInput} placeholder='MM'/><Text style={styles.colorTimer}>:</Text><TextInput style={styles.timerInput} placeholder='SS'/>
    const setHours=(id)=> {
      {sethr(id)}
    }
    const [min,setmin]=useState(0)
    const setMinutes=(id)=> {
      {setmin(id)}
    }
    const [sec,setsec]=useState(0)
    const setSeconds=(id)=> {
      {setsec(id)}
    }
    const [Inter,setInter]=useState();
    //clearTimeout(Inter);
    var i,j,k;
    var br=false
    let t1={
      'hour':hr,
      'min':min,
      'sec':sec
    }
    var a,b,c,split1='',split2='',split3='';
    const [s1,sets1]=useState('');
    const [s2,sets2]=useState('');
    const [s3,sets3]=useState('');
    const get1 = async () => {
      try {
        const h = await AsyncStorage.getItem("hr1");
        const m = await AsyncStorage.getItem("min1");
        const s = await AsyncStorage.getItem("sec1");
        //const s = await AsyncStorage.getItem('sec');
        if(h!=null) {
        //  n=ParseInt(a,10);
          sethr(parseInt(h));
          setmin(parseInt(m));
          setsec(parseInt(s));
          sets1(h+':'+m+':'+s);
        }
      } catch(e) {
        // read error
      }
    
      console.log('Done.')
    
    }
    const set1 = async () => {
      try {
        const h = ["hr1", hr+'']
        const m = ["min1", min+'']
        const s = ["sec1",sec+'']
        await AsyncStorage.multiSet([h,m,s])
        await get1();
      } catch(e) {
        // save error
      }
      console.log('Done.')
    }
    const get2 = async () => {
      try {
        const h = await AsyncStorage.getItem("hr2");
        const m = await AsyncStorage.getItem("min2");
        const s = await AsyncStorage.getItem("sec2");
        //const s = await AsyncStorage.getItem('sec');
        if(h!=null) {
        //  n=ParseInt(a,20);
          sethr(parseInt(h));
          setmin(parseInt(m));
          setsec(parseInt(s));
          sets2(h+':'+m+':'+s);
        }
      } catch(e) {
        // read error
      }
    
      console.log('Done.')
    
    }
    const set2 = async () => {
      try {
        const h = ["hr2", hr+'']
        const m = ["min2", min+'']
        const s = ["sec2",sec+'']
        await AsyncStorage.multiSet([h,m,s])
        await get2();
      } catch(e) {
        // save error
      }
      console.log('Done.')
    }
    const get3 = async () => {
      try {
        const h = await AsyncStorage.getItem("hr3");
        const m = await AsyncStorage.getItem("min3");
        const s = await AsyncStorage.getItem("sec3");
        //const s = await AsyncStorage.getItem('sec');
        if(h!=null) {
        //  n=ParseInt(a,30);
          sethr(parseInt(h));
          setmin(parseInt(m));
          setsec(parseInt(s));
          sets3(h+':'+m+':'+s);
        }
      } catch(e) {
        // read error
      }
    
      console.log('Done.')
    
    }
    const getall = async () => {
      await get1();
      await get2();
      await get3();
    }
    const set3 = async () => {
      try {
        const h = ["hr3", hr+'']
        const m = ["min3", min+'']
        const s = ["sec3",sec+'']
        await AsyncStorage.multiSet([h,m,s])
        await get3();
      } catch(e) {
        // save error
      }
      console.log('Done.')
    }
    
    

    function setH() {
      //n=1
      //else if(!(i&j&k)) {
      //  clearInterval(Inter)
      //  return 
      //}
      setsec(j--)
      setmin(i)
      sethr(k)
      if(j==-1)
      {
        j=59;
        i--;
      }
      if(i==-1)
      {
        i=59
        k--
       // n++;
      }
      if(k!=-1)
      setInter(setTimeout(setH,1000))
      else
      {
        n=0;
        sets();
        
      }
      //return(
        //<View><Text>{hr}</Text></View>) 
       // if(j>=70)
      //learInterval(Interval);
    }
    const setc=()=> {
      //console.log(id);
      i=min;
      j=sec;
      k=hr;
      n=0;
     // clearTimeout(Inter);
      setH();  
      
    }
    const sets=()=> {
      clearTimeout(Inter);
      if(n+1==1){
      n=1;
      setInter(setTimeout(sets,1000))}
      //timer();
    }
    const reset=() =>{
      clearTimeout(Inter);
      if(n+1==1){
      n=1;
      setsec(0)
      setmin(0)
      sethr(0)
      setInter(setTimeout(reset,1000))}
    }

    if(n%2!=0)
    {return (
      <><View style={styles.containerTimer}>
        <FlatList
          data={timehr}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>setHours(item.key)}>
              <Text style={styles.listTimer}>{item.key}</Text>
            </TouchableOpacity>
          )} />
        <FlatList
          data={timemin}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>setMinutes(item.key)}>
            <Text style={styles.listTimer}>{item.key}</Text>
            </TouchableOpacity>
          )} />
        <FlatList
          data={timesec}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>setSeconds(item.key)}>
            <Text style={styles.listTimer}>{item.key}</Text>
            </TouchableOpacity>
          )} />
      </View><View style={styles.containerTimer}>
          <Text style={styles.colorTimer}>
            {hr}:{min}:{sec}
            <Button title='Start' onPress={setc}/>
          </Text>
        </View><View style={styles.containerTimer}>
          <Text style={styles.colorTimer}>
            <Button title='getall' onPress={getall}/>{"\n"}
            <View style={styles.containerTimer}><Button title='Retreieve_1' onPress={get1}/>
            <Button title='Store_here_1' onPress={set1}/>
            <Text style={styles.colorTimer}>{s1}</Text></View>
            <View style={styles.containerTimer}><Button title='Retreieve_2' onPress={get2}/>
            <Button title='Store_here_2' onPress={set2}/>
            <Text style={styles.colorTimer}>{s2}</Text></View>
            <View style={styles.containerTimer}><Button title='Retreieve_3' onPress={get3}/>
            <Button title='Store_here_3' onPress={set3}/>
            <Text style={styles.colorTimer}>{s3}</Text></View>
          </Text>
        </View></>
  
    )}
    else {
      return (<View style={styles.containerTimer}>
      <Text style={styles.colorTimer}>
        {hr}:{min}:{sec}
      </Text>
      <Button title='Pause' onPress={sets}/>
      <Button title='reset' onPress={reset}/>
      </View>)
    };
  };

const Tab=createBottomTabNavigator();
function TabSwitch() {
  return (
  <Tab.Navigator>
    
    <Tab.Screen name="Stop Watch" component={StopWatch}/>
    <Tab.Screen name="Timer" component={Timer}/>
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabSwitch />
    </NavigationContainer>
    //stopWatch()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC5C5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorChoice: {
    color:'red',
    fontSize:40,
   // backgroundColor:''
  },

  containerTimer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorTimer: {
    color:'white',
    fontSize:40,
  },

  timerInput: {
    color:'brown',
    width:65,
    fontSize:40,
    borderColor:'yellow',
    borderStyle:'dotted',
    borderWidth:1,
    padding:5,
  },

  listTimer: {
    fontSize:40,
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    //width:50
  },
  listwatch: {
    fontSize:40,
    backgroundColor:'#FFC5C5',
    color:'red',
    textAlign:'center',
    //width:50
  }
});
