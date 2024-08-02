import { View, Text, Image, FlatList } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./Ranking.styles";
const Ranking = () => {
  const data = [
    {
      id: "1",
      name: "Juanito",
      number: 4,
      image: "../../assets/images/profile.png",
    },
    {
      id: "2",
      name: "Marquito",
      number: 5,
      image: "../../assets/images/profile.png",
    },
    {
      id: "3",
      name: "Pepito",
      number: 3,
      image: "../../assets/images/profile.png",
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.image}
        />
        <Image source={{ uri: item.image }} />
        <View style={styles.star}>
          <Icon name="star" size={16} color="#858a00" />
          <Text>{item.number}</Text>
        </View>

        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ranking</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Ranking;
