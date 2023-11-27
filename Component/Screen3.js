import React,{useState}from 'react';
import { View, TextInput, StyleSheet, Text, Image, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-virtualized-view';

const Screen3 = () => {
  
  
  const jsondata = {
    "foodItems": [
      {
        "id": 1,
        "name": "Burger",
        "image": "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg  ",
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 2,
        "name": "Pizza",
        "image": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        "street": "456 Elm St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "67890",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 3,
        "name": "Pasta",
        "image": "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800 ",
        "street": "789 Oak Ave",
        "city": "Nowhere",
        "state": "TX",
        "zip": "54321",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 4,
        "name": "Salad",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ehfDVe_Y5YuvJ7oc14SWbndJyWn5Ya49cQ&usqp=CAU",
        "street": "789 Oak Ave",
        "city": "Nowhere",
        "state": "TX",
        "zip": "54321",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 5,
        "name": "Steak",
        "image": "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg",
        "street": "456 Elm St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "67890",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 6,
        "name": "Sushi",
        "image": "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
        "street": "456 Elm St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "67890",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 7,
        "name": "Ice Cream",
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-ice-cream-e127d41.jpg?resize=768,574",
        "street": "456 Elm St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "67890",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 8,
        "name": "Cake",
        "image": "https://m.media-amazon.com/images/I/71WZJ0KCrkS._AC_UF1000,1000_QL80_.jpg",
        "street": "321 Pine Blvd",
        "city": "Everytown",
        "state": "FL",
        "zip": "98765",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 9,
        "name": "Burrito",
        "image": "https://i0.wp.com/farm5.static.flickr.com/4042/4405761845_843ed41eb0.jpg",
        "street": "321 Pine Blvd",
        "city": "Everytown",
        "state": "FL",
        "zip": "98765",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 10,
        "name": "Tacos",
        "image": "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg ",
        "street": "321 Pine Blvd",
        "city": "Everytown",
        "state": "FL",
        "zip": "98765",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 11,
        "name": "Fried Chicken",
        "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Chicken-Wing.jpg",
        "street": "321 Pine Blvd",
        "city": "Everytown",
        "state": "FL",
        "zip": "98765",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 12,
        "name": "Hot Dog",
        "image": "https://www.allrecipes.com/thmb/g8TbBtq9Ka3tt6iX4B8luFkqtIw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/268494-basic-air-fryer-hot-dogs-BuckwheatQueen-4x3-84d84c97b9084e75ad49d8d6154494ca.jpg",
        "street": "654 Cedar Ln",
        "city": "Elsewhere",
        "state": "AZ",
        "zip": "13579",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 13,
        "name": "French Fries",
        "image": "https://thecozycook.com/wp-content/uploads/2018/10/Homemade-French-Fry-Recipe-.jpg",
        "street": "654 Cedar Ln",
        "city": "Elsewhere",
        "state": "AZ",
        "zip": "13579",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 14,
        "name": "Cheeseburger",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXp9-RVexdMSeM6AjuhxUQ7b3ge8kcIDgHLw&usqp=CAU",
        "street": "987 Birch Rd",
        "city": "Noway",
        "state": "WA",
        "zip": "24680",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 15,
        "name": "Muffin",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0b_8QxPg01bRiHsLT9dLbLqn9NrDuQ8mTAw&usqp=CAU",
        "street": "987 Birch Rd",
        "city": "Noway",
        "state": "WA",
        "zip": "24680",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 16,
        "name": "Pancakes",
        "image": " https://handletheheat.com/wp-content/uploads/2019/02/The-Best-Pancake-Recipe-SQUARE-500x375.jpg",
        "street": "234 Maple Dr",
        "city": "Anywhere",
        "state": "OR",
        "zip": "97531",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 17,
        "name": "Waffles",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz49fTEtv04GH4aorUPM8owp0XfTfYgXyGvg&usqp=CAU",
        "street": "234 Maple Dr",
        "city": "Anywhere",
        "state": "OR",
        "zip": "97531",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 18,
        "name": "Doughnut",
        "image": "https://www.greatestbakery.in/wp-content/uploads/2022/03/Buy-Doughnut-in-Nagercoil.jpg",
        "street": "567 Spruce Ct",
        "city": "Nopeville",
        "state": "GA",
        "zip": "86420",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 19,
        "name": "Shrimp",
        "image": "https://www.stylecraze.com/wp-content/uploads/2021/11/Shrimp-Health-Benefits-How-To-Cook-And-Side-Effects.jpg",
        "street": "890 Pineapple Ave",
        "city": "Elseville",
        "state": "MI",
        "zip": "75309",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 20,
        "name": "Fish and Chips",
        "image": "https://grandbaby-cakes.com/wp-content/uploads/2023/04/fish-and-chips-recipe.jpg",
        "street": "890 Pineapple Ave",
        "city": "Elseville",
        "state": "MI",
        "zip": "75309",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 21,
        "name": "Ramen",
        "image": "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegan-ramen.jpg",
        "street": "432 Mango Ln",
        "city": "Nonexistent",
        "state": "IL",
        "zip": "25846",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 22,
        "name": "Chocolate",
        "image": "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/fruit-and-nut-filling-wrapped-milk-chocolates-250-gm-coorg-homemade-chocolate.20220912004959.webp",
        "street": "765 Banana Rd",
        "city": "Faketown",
        "state": "OH",
        "zip": "36914",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 23,
        "name": "Cupcake",
        "image": "https://sugargeekshow.com/wp-content/uploads/2022/09/1200chocolate_cupcakes_featured-2-.jpg",
        "street": "765 Banana Rd",
        "city": "Faketown",
        "state": "OH",
        "zip": "36914",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 24,
        "name": "Nachos",
        "image": "https://static.toiimg.com/thumb/63625118.cms?imgsize=308885&width=800&height=800",
        "street": "098 Strawberry Blvd",
        "city": "Narnia",
        "state": "CO",
        "zip": "14785",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      },
      {
        "id": 25,
        "name": "Smoothie",
        "image": "https://bakerbynature.com/wp-content/uploads/2011/05/Tropical-Smoothie-123456-1-of-1.jpg",
        "street": "098 Strawberry Blvd",
        "city": "Narnia",
        "state": "CO",
        "zip": "14785",
        "deal":"FLAT DEAL",
        "rs":"$5 OFF",
        "rs1":"ABOVE $10",
      }
    ]

  }

  const images = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HjQfYqYBsspqy-iV0-Cw5uHo-cH-3TbhbAugLXu7RnL9lmqiPZUkqBy-XpKfandg7FQ&usqp=CAU';

  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = jsondata.foodItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'orange', borderBottomStartRadius: 30, borderBottomEndRadius: 30, paddingTop: 50 }}>
        <Image source={{ uri: images }} style={{ width: 35, height: 35, position: 'absolute', left: responsiveWidth(80), top: 40, borderRadius: 50 }} />
        <Text style={{ fontSize: 23, position: 'absolute', marginTop: 40, color: 'white', fontWeight: 'bold', left: 20 }}>
          Food List...
        </Text>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Search..." placeholderTextColor="black" edile={true} onChangeText={setSearchQuery} />
        </View>
      </View>
      <FontAwesome5 size={20} name='search' style={{ left: 300, bottom: 15 }} color={'#704a93'} />
      <View>
        <Text style={{ fontSize: 17, position: 'absolute', color: 'black', fontWeight: '700', left: 30, top: 50 }}>
          Hello, what's on your mind?
        </Text>

        <View style={{ flex: 1 }}>
          <FlatList
            style={{ top: 100, marginLeft: 10 }}
            horizontal
            data={jsondata.foodItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, bottom: 40, marginTop: 60, borderRadius: 20 }} />
                <Text style={{ top: 100, right: 80, marginTop: 25, fontWeight: '600' }}>{item.name}</Text>
              </>
            )}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            style={{ top: 100, marginLeft: 10 }}
            horizontal
            data={jsondata.foodItems}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, bottom: 40, marginTop: 60, borderRadius: 20 }} />
                <Text style={{ top: 100, right: 80, marginTop: 25, fontWeight: '600' }}>{item.name}</Text>
              </>
            )}
          />
          <Text style={{ fontSize: 19, position: 'absolute', color: 'black', fontWeight: 'bold', top: 450, left: 20 }}>
            25 restaurants to explore.
          </Text>
          <FlatList
            style={{ top: 180 }}
            pagingEnabled
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <Image source={{ uri: item.image }} style={{ width: 130, height: 150, borderRadius: 18, left: 20 }} />
                <Text style={{ left: 170, bottom: 130, fontWeight: 'bold', fontSize: 17 }}>{item.name}</Text>
                <Text style={{ top: 50, position: 'absolute', left: 170, fontWeight: 'bold' }}>{item.street},</Text>
                <Text style={{ top: 75, position: 'absolute', left: 250 }}>{item.state}</Text>
                <Text style={{ top: 75, position: 'absolute', left: 170 }}>{item.city},</Text>
                <Text style={{ top: 100, position: 'absolute', left: 170 }}>{item.zip}</Text>
                <Text style={{ top: 85, position: 'absolute', left: 30, color: 'white', fontWeight: 'bold' }}>{item.deal}</Text>
                <Text style={{ top: 100, position: 'absolute', left: 30, color: 'white', fontWeight: 'bold', fontSize: 20 }}>{item.rs}</Text>
                <Text style={{ top: 125, position: 'absolute', left: 30, color: 'lightgray', fontWeight: '600' }}>{item.rs1}</Text>
                <Text style={{ top: 20, position: 'absolute', left: responsiveWidth(92), color: 'gray', fontSize: 25, fontWeight: 'bold' }}>⋮ </Text>
                <Text style={{ top: 4, position: 'absolute', left: responsiveWidth(33), color: 'white', fontSize: 30, fontWeight: 'bold' }}>♡</Text>
              </>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    top: responsiveHeight(6),
    alignSelf: 'center',
    shadowColor: '#984065',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.00,
    elevation: 5,
  },
  inputText: {
    height: 50,
    color: "black"
  },
});
