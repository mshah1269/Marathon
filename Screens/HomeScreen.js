 import React from 'react';
import { View, Text, StyleSheet ,Image  } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { SliderBox } from "react-native-image-slider-box";



const HomeScreen = props => {


    const images = [
        'https://files.prokerala.com/news/photos/imgs/1024/allahabad-people-participate-in-30th-all-india-241807.jpg',
        'https://www.procam.in/static-assets/waf-images/2e/3d/2a/4-3/796-597/SP4NIhk7yQ.jpg',
        "https://www.actionagainsthunger.in/sites/default/files/styles/blog_post/public/images/blog-posts/Tata-team-with-aah-india-banner.JPG?itok=Q_yFJQpx",

      ];

    return(
        <View style={styles.HomeImage}> 
            <View style={styles.HomeImage}>                   
            <SliderBox
                    images={images}
                    sliderBoxHeight={600}
                    autoplay
                    circleLoop
                    dotStyle={{
                        width: 0,
                        height: 0,
                      }}

                    />

            </View>
            <View style={styles.HomeIcons}>
                <View style={{alignItems:'center'}}>
                    <AntDesign 
                        name="infocirlceo" size={25} 
                        style={{margin:20}}  
                        onPress={() => {
                                navData.navigation.navigate({
                                routeName: 'Edit'
                        });
                    }}/>              
                    <Text>Race Info</Text>

                </View>
                <View style={{alignItems:'center'}}>
                    <AntDesign 
                        name="infocirlceo" size={25} 
                        style={{margin:20}}  
                        onPress={() => {
                                navData.navigation.navigate({
                                routeName: 'Edit'
                        });
                    }}/>              
                    <Text>Tracking</Text>

                </View>
                <View style={{alignItems:'center'}}>
                    <AntDesign 
                        name="infocirlceo" size={25} 
                        style={{margin:20}}  
                        onPress={() => {
                                navData.navigation.navigate({
                                routeName: 'Edit'
                        });
                    }}/>              
                    <Text>expo Info</Text>

                </View>

            </View>
            <View style={styles.footerText}>
                <Text style={{color:'white'}}>Powered By <Text style={{fontFamily:'open-sans-bold'}}> TATA</Text> CONSULTANCY</Text>        
            </View>
        </View>
            
            

        
        
    );

};



HomeScreen.navigationOptions = navData => {
    return {     
        headerStyle: {height: 200},
        headerTitle: (
            <View style={{paddingHorizontal:'50%'}}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/dd/Mumbai_Marathon_logo.png' }}
                    style={{width:160, height:100}}
                />
                {/* <Text>Hello</Text> */}
            </View>
        )
    };
  };
  

const styles = StyleSheet.create({
    HomeImage:{
        flex:1,
        // flexDirection:'row'
        
        
        
    },
    HomeIcons:{
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'space-around' 

    },
    footerText:{
        alignItems:'center',
        backgroundColor:'#70c9f4',
        padding:10,
        flexDirection:'column-reverse'
        
    }


});

export default HomeScreen;
