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

class KondisiBaris extends Component{

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
                                <Text style={{fontSize:12}}>Sambil Jalan</Text>
                                <Text style={{fontSize:10, color:'grey'}}>Kamu bisa input ini ketika berjalan disepanjang baris.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 20, backgroundColor:'white'}}>
                        
                        <View style={style.lContent}>
                            <Text style={style.txtLabel}>Pokok Panen</Text>
                            <View style={[style.containerInput, {flex:5}]}>
                                <TouchableOpacity style={style.btnMinus}>
                                    <Icon2 name={"minus"}  size={20} color="white" />
                                </TouchableOpacity>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[style.searchInput]}/>
                                <TouchableOpacity style={style.btnAdd}>
                                    <Icon name={"add"}  size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.lContent}>
                            <Text style={style.txtLabel}>Buah TInggal</Text>
                            <View style={[style.containerInput, {flex:5}]}>
                                <TouchableOpacity style={style.btnMinus}>
                                    <Icon2 name={"minus"}  size={20} color="white" />
                                </TouchableOpacity>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[style.searchInput]}/>
                                <TouchableOpacity style={style.btnAdd}>
                                    <Icon name={"add"}  size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.lContent}>
                            <Text style={style.txtLabel}>Brodol di Pinggiran</Text>
                            <View style={[style.containerInput, {flex:5}]}>
                                <TouchableOpacity style={style.btnMinus}>
                                    <Icon2 name={"minus"}  size={20} color="white" />
                                </TouchableOpacity>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[style.searchInput]}/>
                                <TouchableOpacity style={style.btnAdd}>
                                    <Icon name={"add"}  size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.lContent}>
                            <Text style={[style.txtLabel,{fontWeight:'300'}]}>Brondol di TPH</Text>
                            <View style={[style.containerInput, {flex:5}]}>
                                <TouchableOpacity style={style.btnMinus}>
                                    <Icon2 name={"minus"}  size={20} color="white" />
                                </TouchableOpacity>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={[style.searchInput]}/>
                                <TouchableOpacity style={style.btnAdd}>
                                    <Icon name={"add"}  size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
					
                </Content>
            </Container>
        )
    }
}

export default KondisiBaris;

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
    btnMinus:{
        borderWidth:1,
        borderColor:'#cca300',
        alignItems:'center',
        justifyContent:'center',
        width:35,
        height:35,
        backgroundColor:'#e6b800',
        borderRadius:100,
            
    },
    btnAdd:{
        borderWidth:1,
        borderColor:'#00e639',
        alignItems:'center',
        justifyContent:'center',
        width:35,
        height:35,
        backgroundColor: Colors.brand,
        borderRadius:100,
    }
};