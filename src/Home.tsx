import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useEffect, useState } from "react"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { useDispatch, useSelector } from "react-redux"
import { HomeApiCall, IP } from "./redux/slicers/HomeSlicer"
import { AppDispatch, RootState } from "./redux/Store"
import Feather from "react-native-vector-icons/Feather"
import { HomeApi } from "./redux/slicers/reduxSlicer"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"

interface HomeProps {

}

interface HomeState {
    searchInput: string
}

interface IDummyJson {
    id: number,
    image: string,
    title: string,
    tag: string,
    date: string,
    views: number
}[]

const dummyjson: IDummyJson[] = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFWdf5qeFKm3MknPNtkPBGP7y7anXqJo0IQ&s",
        title: "Augmented Reality Trends for 2022",
        tag: "Technology",
        date: "Jan 4, 2022",
        views: 3344
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFWdf5qeFKm3MknPNtkPBGP7y7anXqJo0IQ&s",
        title: "Stocks making the biggest moves midday: Tesla...",
        tag: "Business",
        date: "Jan 1, 2022",
        views: 9823
    }
]


const Home = () => {
    const [searchInput, setSearcInput] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()
    const postData = useSelector((state: RootState) => state.home.posts)
    const [activeTab, setActiveTab] = useState("All")
    const getSearchInput = (searchValue: string) => {
        getSearchInput(searchValue)
    }
    useEffect(() => {
        dispatch(HomeApiCall())
    }, [])

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
    }
    const renderEachTab = ({ item, index }: { item: IDummyTabs, index: number }) => {
        return (
            <TouchableOpacity key={item.id}
                style={activeTab === item.name ? styles.activeStyles : styles.eachTab} onPress={() => handleActiveTab(item.name)}>
                <Text style={activeTab === item.name ? styles.activeTabStyles : styles.tabStyles}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const renderEachArticle = ({ item, index }: { item: IDummyJson, index: number }) => {
        return (
            <View style={styles.bottomFlatlist}>
                <View style={{ height: responsiveHeight(14), overflow: "hidden", width: responsiveWidth(30), borderRadius: responsiveFontSize(2) }}>
                    <Image resizeMode="cover" source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrZUHQBxCpGKmxj7E0cww8dM1ysPxCfVSag&s" }}
                        style={{ height: "100%", width: "100%" }} />
                </View>
                <View style={styles.rightCont}>
                    <View style={styles.rightTopCont}>
                        <View style={styles.tagTextContainer}>
                            <Text style={styles.tagText}>{item.tag}</Text>
                        </View>
                        <View style={styles.rowCont}>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Entypo name="dot-single" size={responsiveFontSize(2)} color="#000" />
                            <Text style={styles.dateText}>{item.views} Views</Text>
                        </View>
                    </View>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>
            </View>
        )
    }
    const renderEachItem = ({ item, index }: { item: IP, index: number }) => {
        return (
            <View style={styles.eachItemStyles} key={item.id}>
                <View style={styles.imageStyles}>
                    <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrZUHQBxCpGKmxj7E0cww8dM1ysPxCfVSag&s" }}
                        style={{ width: "100%", height: "100%" }} resizeMode="cover">
                        <View style={{...styles.rowCont,justifyContent:"space-between"}}>

                            <View style={styles.techStyles}>
                                <Text style={styles.techText}>Technology</Text>
                            </View>
                            <View style={styles.bookmarkstyles}>
                                <Feather name="bookmark" size={responsiveFontSize(2)} color={"black"} />
                            </View>
                        </View>
                        <View><Text></Text></View>
                    </ImageBackground>
                </View>
                <Text style={styles.eachText}>{item.title}</Text>
                <View style={styles.authorDetails}>
                    <View>
                        <View>
                            <Image />
                        </View>
                        <Text>By : Mason Eduard<Text></Text></Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Text>Jan 3,2022</Text>
                        <Text>{item.views}</Text>
                    </View>
                </View>
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <View style={{ width: "75%", flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Feather name="search" color="blue" size={responsiveFontSize(3)} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInputStyles}
                        placeholder="Search"
                        placeholderTextColor={"red"}
                        value={searchInput}
                        onChangeText={getSearchInput}
                    />
                </View>
                <TouchableOpacity>
                    <Feather name="filter" size={responsiveFontSize(3)} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.reccomendedText}>Recommended</Text>
                <FlatList
                    showsHorizontalScrollIndicator={true}
                    horizontal
                    data={postData}
                    renderItem={renderEachItem}
                />
            </View>
            <View>
                <FlatList
                    horizontal
                    data={dummyTabs}
                    renderItem={renderEachTab}
                />
            </View>
            <View>
                <FlatList
                    data={dummyjson}
                    renderItem={renderEachArticle}
                />
            </View>
        </View>
    )
}

interface IDummyTabs{
    id:number,
    name:string,
}[]
const dummyTabs:IDummyTabs[] = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Technology"
    },
    {
        id: 3,
        name: "LifeStyle"
    }
]

export default Home

const styles = StyleSheet.create({
    dateText: {
        fontSize: responsiveFontSize(1.4)
    },
    tagText: {
        padding: responsiveFontSize(1),
        fontSize: responsiveFontSize(1.4),
    },
    tagTextContainer: {
        backgroundColor: "#00000020",
        borderRadius: responsiveFontSize(1.2)
    },
    rowCont: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        fontFamily: "Roboto",
        fontWeight: "500",
        color: "#000000",
        fontSize: responsiveFontSize(2.4),
        width: responsiveWidth(50)
    },
    rightTopCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rightCont: {
        marginLeft: responsiveWidth(5),
        width: responsiveWidth(55)
    },
    bottomFlatlist: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: responsiveHeight(1)
    },
    tabStyles: {
        fontFamily: "Roboto",
        fontSize: responsiveFontSize(2),
        color: "#828282",
    },
    activeTabStyles: {
        fontFamily: "Roboto",
        fontSize: responsiveFontSize(2),
        color: "#FFFFFF",
    },
    reccomendedText: {
        fontSize: responsiveFontSize(3),
        color: "#000000",
        fontWeight: "500"
    },
    techText: {
        fontSize: responsiveFontSize(1.8),
        color: "#FFFFFF"
    },
    techStyles: {
        backgroundColor: '#f2f2f290',
        padding: responsiveWidth(2),
        borderRadius: responsiveFontSize(1),
        justifyContent: "center",
        alignItems: "center",
        width: responsiveWidth(25),
        margin: responsiveFontSize(1)
    },
    bookmarkstyles:{
        backgroundColor: '#f2f2f290',
        padding: responsiveWidth(2),
        borderRadius: responsiveFontSize(1),
        justifyContent: "center",
        alignItems: "center",
        margin: responsiveFontSize(1)
    },
    authorDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    eachTab: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    activeStyles: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#000000"
    },
    eachText: {
        fontFamily: "Roboto",
        fontSize: responsiveFontSize(2.5)
    },
    imageStyles: {
        height: responsiveHeight(20),
        width: "100%",
        borderRadius: responsiveFontSize(2),
        overflow: "hidden",
    },
    eachItemStyles: {
        margin: 10,
        height: responsiveHeight(30),
        width: responsiveWidth(70),
        overflow: "hidden",
        borderRadius: responsiveWidth(5),
        padding: responsiveFontSize(1)
    },
    searchInputStyles: {
        fontSize: responsiveFontSize(2.4),
        fontWeight: "400",
        color: "#000000",
        width: "100%",

    },
    searchInputContainer: {
        height: responsiveHeight(5),
        backgroundColor: "#F4F4F4",
        borderRadius: responsiveFontSize(2),
        paddingHorizontal: responsiveWidth(3),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    container: {
        flex: 1,
        paddingTop: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(5)
    }
})