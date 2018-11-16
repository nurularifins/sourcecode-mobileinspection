import React, {Component} from 'react';
import {TouchableOpacity, FlatList, TextInput } from 'react-native';
import {
	Container,
	Content,
	Body,
	Text,
    View,
	ListItem
} from 'native-base';
import Colors from '../../Constant/Colors'
import Fonts from '../../Constant/Fonts'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

class KondisiBaris2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            stepper: [
				{ step: '1', title: 'Pilih Lokasi' },
				{ step: '2', title: 'Kondisi Baris' },
				{ step: '3', title: 'Summary' },
			],
        }
    }

    render(){
		const initialPage = '2';
        return(
            <Container style={{flex:1}}>
                <Content>
                    <View style={{backgroundColor:'white'}}>
                        {/* STEPPER */}
                        <FlatList
                            style={[style.stepperContainer,{margin:15}]}
                            horizontal
                            data={this.state.stepper}
                            getItemLayout={this.getItemLayout}
                            initialScrollIndex={Number(initialPage) - 1}
                            initialNumToRender={2}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <TouchableOpacity>
                                        <View
                                            style={[
                                                style.stepperListContainer
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    style.stepperNumber,
                                                    {
                                                        backgroundColor:
                                                            rowData.step === initialPage
                                                                ? Colors.brand
                                                                : Colors.buttonDisabled
                                                    }
                                                ]}
                                            >
                                                <Text style={style.stepperNumberText}>{rowData.step}</Text>
                                            </View>
                                            <Text
                                                style={[
                                                    Fonts.style.caption,
                                                    {paddingLeft: 3,color: rowData.step == initialPage ? Colors.brand : Colors.textSecondary }
                                                ]}
                                            >
                                                {rowData.title}
                                            </Text>
                                            {rowData.step !== '3' && (
                                                <View style={{ flex: 1 }}>
                                                    <Icon
                                                        name="chevron-right"
                                                        size={24}
                                                        color={Colors.buttonDisabled}
                                                        style={style.stepperNext}
                                                    />
                                                </View>
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />

                        <View style={style.lContent}>
                            <View style={{flex:2}}>

                            </View>
                            <View style={{flex:7}}>
                                <Text style={{fontSize:12}}>Diujung Baris</Text>
                                <Text style={{fontSize:10, color:'grey'}}>Ini untuk kamu input nilai baris.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{height: 20, backgroundColor:'#D0D0D0'}}/>

                    <View style={{backgroundColor:'white', padding:20}}>
                        <Text>Perawatan</Text>
                        <View style={{height: 1, backgroundColor:'#989898', marginBottom:5, marginTop:5}}/>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Piringan</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Pasar Pikul</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>TPH</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Gawangan</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Prunning</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Titi Panen</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>
                    </View>

                    <View style={{height: 20, backgroundColor:'#D0D0D0'}}/>

                    <View style={{backgroundColor:'white', padding:20}}>
                        <Text>Pemupukan</Text>
                        <View style={{height: 1, backgroundColor:'#989898', marginBottom:5, marginTop:5}}/>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Sistem Penaburan</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>

                        <View style={{marginTop:10}}>
                            <Text style={{color:'grey'}}>Kondisi Pupuk</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={[style.button]}
                                    ref="pupuk"
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Baik</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button,]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Sedang</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[style.button]}
                                    onPress={() => {}}>
                                    <Text style={style.buttonText}>Buruk</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>
                    </View>
					
                </Content>
            </Container>
        )
    }
}

export default KondisiBaris2;

const style = {
	stepperContainer: {
		flexDirection: 'row',
		height: 48
	},
	stepperListContainer: { flexDirection: 'row', flex: 1, alignItems: 'center' },
	stepperNumber: {
		height: 24,
		width: 24,
		backgroundColor: Colors.buttonDisabled,
		borderRadius: 12,
		justifyContent: 'center'
	},
	stepperNumberText: [Fonts.style.caption, { textAlign: 'center', color: Colors.textDark }],
	stepperNext: { alignSelf: 'flex-end', paddingRight: 4 },
	sectionHeader: [
		Fonts.style.caption,
		{ color: Colors.textSecondary, paddingLeft: 16, paddingTop: 16, paddingBottom: 8 }
	],
    lContent : {
        flexDirection: 'row',
        alignItems: 'center',
        justilistContainerfyContent: 'center',
        padding: 10
    },
    searchInput: {
        height: 40,
        padding: 10,
        marginRight: 5,
        marginLeft:5,
        flex: 1,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#989898',
        color: 	'#808080',
        textAlign:'center'
    },
    txtLabel: {
        flex:3,
        color: 'grey',
        fontSize: 15,
        
    },
    containerInput: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        
    },
    button: {
        width:100,
        backgroundColor: '#DCDCDC',
        borderRadius: 25, 
        margin:5,  
        padding:10 ,
        alignSelf:'center',
        justifyContent: 'center',
    },
    buttonSelect: {
        width:100,
        backgroundColor: '#ff3333',
        borderRadius: 25, 
        margin:5,  
        padding:10 ,
        alignSelf:'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize:15,
        color:'#ffffff',
        textAlign:'center'
    },
};