import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useEffect, useState } from "react"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { useDispatch, useSelector } from "react-redux"
import { HomeApiCall } from "./redux/slicers/HomeSlicer"
import { AppDispatch, RootState } from "./redux/Store"
import Feather from "react-native-vector-icons/Feather"
import { HomeApi } from "./redux/slicers/reduxSlicer"

interface HomeProps {

}

interface HomeState {
    searchInput: string
}

const dummyjson = [
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    },
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    },
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    },
    {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    },
]


const Home = () => {
    const [searchInput, setSearcInput] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()
    const postData = useSelector((state: RootState) => state.home.posts)
    console.log(postData, "<<<<<")
    const getSearchInput = (searchValue: string) => {
        getSearchInput(searchValue)
    }
    useEffect(() => {
        dispatch(HomeApiCall())
    }, [])
    const renderEachTab = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={styles.eachTab}>
                <Text>{item.name}</Text>
            </View>
        )
    }
    const renderEachArticle = () => {
        return (
            <View style={{ margin: 10 }}>
                <View style={{ height: responsiveHeight(10), overflow: "hidden", width: responsiveWidth(20), borderRadius: responsiveFontSize(5) }}>
                    <Image resizeMode="cover" source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrZUHQBxCpGKmxj7E0cww8dM1ysPxCfVSag&s" }}
                        style={{ height: "100%", width: "100%" }} />
                </View>
            </View>
        )
    }
    const renderEachItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={styles.eachItemStyles} key={item.id}>
                <View style={styles.imageStyles}>
                    <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrZUHQBxCpGKmxj7E0cww8dM1ysPxCfVSag&s" }}
                        style={{ width: "100%", height: "100%" }} resizeMode="cover">
                        <View>
                            <Text>Technology</Text>
                        </View>
                        <View><Text></Text></View>
                    </ImageBackground>
                </View>
                <Text style={styles.eachText}>{item.title}</Text>
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
                <Text>Recommended</Text>
                <FlatList
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

const dummyTabs = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 1,
        name: "Technology"
    },
    {
        id: 1,
        name: "LifeStyle"
    }
]

export default Home

const styles = StyleSheet.create({
    eachTab: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
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
        backgroundColor: "yellow",
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