import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={
      sum:'0',
      numDot:'.',
      num1:'1',
      num2:'2',
      num3:'3',
      num4:'4',
      num5:'5',
      num6:'6',
      num7:'7',
      num8:'8',
      num9:'9',
      num0:'0',
      plusSum:'0',
      oper:'',
      x:'0'
    }
  }

  onNumEQPress(){
    if(this.state.oper == '+'){
      var todN = Number(this.state.sum)+Number(this.state.plusSum)
      this.setState({sum:todN});
      this.setState({plusSum:todN});
      this.setState({x:'0'})
    }else if(this.state.oper == '-'){
      var todNM = Number(this.state.plusSum)-Number(this.state.sum)
      this.setState({sum:todNM});
      this.setState({plusSum:todNM});
      this.setState({x:'0'})
    }else if(this.state.oper == 'X'){
      var todNX = Number(this.state.sum)*Number(this.state.plusSum)
      this.setState({sum:todNX});
      this.setState({plusSum:todNX});
      this.setState({x:'0'})
    }else if(this.state.oper == '�'){
      var todNS = Number(this.state.plusSum)/Number(this.state.sum)
      this.setState({sum:todNS});
      this.setState({plusSum:todNS});
      this.setState({x:'0'})
    }
  }

  onPlusPress(){
    if(this.state.x == '0'){
      var numsum = this.state.sum
      this.setState({plusSum:numsum})
      this.setState({x:'1'})
      this.setState({oper:'+'})
    }if(this.state.x == '2'){
      var todN = Number(this.state.sum)+Number(this.state.plusSum)
      this.setState({sum:todN});
      this.setState({plusSum:todN});
      this.setState({x:'1'})
    }
  }

  onMinusPress(){
    if(this.state.x == '0'){
      var numsum = this.state.sum
      this.setState({plusSum:numsum})
      this.setState({x:'1'})
      this.setState({oper:'-'})
    }if(this.state.x == '2'){
      var todN = Number(this.state.plusSum)-Number(this.state.sum)
      this.setState({sum:todN});
      this.setState({plusSum:todN});
      this.setState({x:'1'})
    }
  }

  onMultiPress(){
    if(this.state.x == '0'){
      var numsum = this.state.sum
      this.setState({plusSum:numsum})
      this.setState({x:'1'})
      this.setState({oper:'X'})
    }if(this.state.x == '2'){
      var todN = Number(this.state.sum)*Number(this.state.plusSum)
      this.setState({sum:todN});
      this.setState({plusSum:todN});
      this.setState({x:'1'})
    }
  }

  onDevidePress(){
    if(this.state.x == '0'){
      var numsum = this.state.sum
      this.setState({plusSum:numsum})
      this.setState({x:'1'})
      this.setState({oper:'�'})
    }if(this.state.x == '2'){
      var todN = Number(this.state.plusSum)/Number(this.state.sum)
      this.setState({sum:todN});
      this.setState({plusSum:todN});
      this.setState({x:'1'})
    }
  }

  onNumDotPress(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = '0'+this.state.numDot;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'.';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num0;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onAcPress(){
    this.setState({sum:'0'})
    this.setState({x:'0'})
  }

  onNum0Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num0;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'0';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num0;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum1Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num1;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'1';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num1;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum2Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num2;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'2';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num2;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }


  onNum3Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num3;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'3';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num3;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum4Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num4;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'4';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num4;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  } 

  onNum5Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num5;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'5';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num5;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum6Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num6;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'6';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num6;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum7Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num7;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'7';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num7;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum8Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num8;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'8';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num8;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  onNum9Press(){
    if(this.state.x == '0' || this.state.x == '2'){
      if(this.state.sum=='0'){
        var temp = this.state.num9;
        this.setState({sum:temp});
      }else if(this.state.sum!='0'){
        var temp1 = this.state.sum+'9';
        this.setState({sum:temp1});
      }
    }else {
      var temp4 = this.state.num9;
      this.setState({sum:temp4});
      this.setState({x:'2'})
    }
  }

  render() {
    return (
      <LinearGradient colors={['#000000', '#000000', '#000000']} style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
          </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.txtOut}>{this.state.sum}</Text>
              </View>
          </View>
           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonSecondary} onPress={()=>this.onAcPress()}><Text style={styles.textSecondary}>AC</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonSecondary}><Text style={styles.textSecondary}>+/-</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonSecondary}><Text style={styles.textSecondary}>%</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonAccent} onPress={()=>this.onDevidePress()}><Text style={styles.text}>�</Text></TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum7Press()}><Text style={styles.text}>7</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum8Press()}><Text style={styles.text}>8</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum9Press()}><Text style={styles.text}>9</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonAccent} onPress={()=>this.onMultiPress()}><Text style={styles.text}>�</Text></TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum4Press()}><Text style={styles.text}>4</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum5Press()}><Text style={styles.text}>5</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum6Press()}><Text style={styles.text}>6</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonAccent} onPress={()=>this.onMinusPress()}><Text style={styles.text}>-</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum1Press()}><Text style={styles.text}>1</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum2Press()}><Text style={styles.text}>2</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNum3Press()}><Text style={styles.text}>3</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonAccent} onPress={()=>this.onPlusPress()}><Text style={styles.text}>+</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 2}}>
                <TouchableOpacity style={styles.buttonDouble} onPress={()=>this.onNum0Press()}><Text style={styles.text}>0</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={()=>this.onNumDotPress()}><Text style={styles.text}>.</Text></TouchableOpacity>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.buttonAccent}><Text style={styles.text} onPress={()=>this.onNumEQPress()}>=</Text></TouchableOpacity>
              </View>
          </View> 
        </View>
      </LinearGradient>
    );
  }
}


const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  text: {
    color: "#fff",
    fontSize: 32
  },
  textSecondary: {
    color: "#060606",
    fontSize: 29
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  buttonDouble: {
    backgroundColor: "#333333",
    flex: 2,
    height: Math.floor(buttonWidth - 10),
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    paddingLeft: 40,
    margin:7
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6", // ?????
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  },
  buttonAccent: {
    backgroundColor: "#f09a36", // ?????
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7
  },
  txtOut: {
    alignItems: 'center',
    fontSize: 60,
    height:100,
    padding: 20,
    margin:1,
    borderColor:'#000000',
    borderWidth : 1,
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'right'
  }
});