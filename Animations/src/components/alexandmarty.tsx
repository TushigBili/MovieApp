import React, { useEffect } from 'react';
import {
  Animated,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get("window")

export const AlexandMarty = () => {
  const posAlex = new Animated.Value(0);
  const posMarty = new Animated.Value(220);

  useEffect(() => {
    Animated.timing(
      posAlex,
      {
        toValue: 140,
        duration: 2000,
        useNativeDriver: true
      }
    ).start()
    Animated.timing(
      posMarty,
      {
        toValue: 150,
        duration: 2000,
        useNativeDriver: true
      }
    ).start()
  }, [])

  return (
    <>
      <View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
        <Animated.Image style={[
          styles.image1,
          {
            transform: [{
              translateX: posAlex
            }]
          }
        ]} source={{ uri: 'data:image/jpeg;base64,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' }} />

        <Animated.Image style={[
          styles.image,
          {
            transform: [{
              translateX: posMarty
            }]
          }
        ]} source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHERUTExMWFRUXGR4aGRYYGRgeIBcgHR8aHSAgIhsaICghGyIlHhgaITEiJSkrLi4vGh81ODMtNygtLy4BCgoKDg0OGhAQGC0gHR0tLS0vLS0tLS0tKy0tLy0tLS0wKy0tLS0tLS0tLS0tLS4rLS0rLS0tLS0tLS4tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAIDCAH/xABCEAABAwIEAwYDBQcBBwUAAAABAAIDBBEFEiExBkFRBxMiYXGBMkKRFCNSobEVM0NicoLBJBZTc5LC4fAXY7Kz0f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQACAgMBAQAAAAAAAAAAAAECEQNBEiExBKH/2gAMAwEAAhEDEQA/ANxREQRHEHEtNw60GokDSQS1upLrdAF6OF+LafiYEwkgj5XCxt1/82XH2j8Ljimjcxo++Zd8R8+bfRw09bHksI4Fxp+A1IOoLHXLTcXGzhb019ioPqFFXn8WQxSiN2maxaeocLg+a7cb4ggwSLvZXaH4WjVz/ID/ADsOabhpKIoDg/iZvFEUkjYzHkkLLEg30ab6bb7eW6n1QREQEREBERAREQEREBERAREQEREBERAREQEREBERAWBdsXDv7Cr2VcbbRTkl1tg/5x/cDm9S7opamx+fhvGK5he50felzonOJFngPFr/AAmzxYj3V24qgh46wyVsLg9wbnYObXt1AI5X1b/cViZy249xu4WTy6ZbLXPxqGkfGPGw/Zrg/EW2LT5eEhWjHCJB4iZHNZlHoBv0HXyVT4ML8NoZHysLGd9na9wN2nJ3ZAafmNwNdBueV5HjN7IoKRsYLe9j76QE3JvbLc87ary83Hly5TGXWM/rtxZ4cePlfdrQeyahbQURAcHOfIXuI2FwGgA8wA0a+quqpnAkZwfDGSPNrtMpvyadR+Vj7rv4T4pZjrddHakDyXsleZZERFQREQEREBERAREQEREBERAREQEREBERAREQEREEbW8P0tdJ3skEbpLAZy0ZiBsM25Vdxr9n4LKGttHNo4iPNntfQZW30dY722Oquixd2IMZWVshOaXxF7ra6OaGt9GsDWgeXUrNkXd+J3izDzjdE/uiXuy/d6uOrXNcYznNwSW2s/xNJ3c0nLS8Ti/blfBTNOjY4YfQBoc4+wJ+ivfDU07ZWtqYDE2ob4SSHAm3hvbQO5Fp1IJ5Ar9mwWHB641nwXjdm6b6vv8AiABY4+TTu5So5u1LGhh9Mylj0Mg1A+WNulvc6egKq/ZxHJW1IaL5W+Jx6dP+w9VBYvXycT1he0EmR2WNnRo0aPLTU+62bg7h9nDsAZcZz4pH9TbryA/TXmoLU3bRfqpuBcZsxetdBH+6AIa63xkbkdG9OquS3AREVBERAREQEREBERAREQEREBERAREQEREBERAWFV8pdXPgji8QdLL3mnj+9kuy/wDU1vP9FuJnaHBmZuYi4bcXI623WIRYpEKqwjd95I52cOBBJL3WFz4cx10FtVLRZ8I+2YzUscx16RrWkNe0tMcjSNRcagtzaj8ZvoArJxYKeup3sc9jna3YHC7g4We3TUXFyDycGnkq3EG0gzTymQnaJpIjZ5Bvzn+Z4N+jQpPD8QjrvCyw8gyPXyylhv7WPIXOizciTSF7POFxgznySEPkJIjcOTOTrcnOFiel7dVH9oHGP2vNS07vuxpK8H4z+EH8PU89tt+vtErJ6KmL45I2sdlj8DHNOXxA2Iu0HVoIuCADoFxdnvA37Ry1FU20WhZEf4nm7o3y5+m8Ej2UcNvcftcgLWfwwdM/83oOXVaoqpxZxnDw6O6ZZ81gBGNmDkXW28m7n01Viw6o+1xRvO7mgn3C3B0oiKgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg+f8AtQmfh+NSyNc4Oyxua4E3b4A3Tps71uVxGjdVGFzfCG2II5fDy6+ED2U32rQR1eK+Bxe4RMbI1gvkILiGl18rSQ4GzrbjflI4dS02E5G1c7IS8XawXe8jno0ENNvUahYv1qOPGKxtDA6aQ5QNAOZJ0AHv9Bc8l2cF05LvHrYWPn1VK7SHtxWQOibaEMLY3Xcc9rkuIdsbkjQC4A9BpvA3+rYQ1tjuXG2+h06bjU/RZ1prPG4/X7PaqdJC54bO0sDmuF2Vkbj4SW2sXjmRsRfzEXxP2gOpw6npTZ7SWyS/gI0LWDqNi7ly6i6VFNT4bmqZ3tfM1pDdQSwfhYOpvqefkNFl+B0FPXzz1lc/JF3hJj1GZxubXGp/pbqU7Yc/DHDdTxE+8YIbfxTPvYHnru53kNetlueD0Yw+FkQfnyDKXG1yfQbbrJcc7QpJ29zRt+zQgWBAAeR5W0jHkNfMK6dlWf7Ec4dYvJaXA+IG2oJ+LXmtxFzREWgREQEREBERAREQEREBERAREQEREBERAREQVzE+HKKB5q5GhjYgZHAWay4Lnukc1tsxJJJzXvYL5+kqn45Vz1z2kGZznMB3Ddmj2a1o9lsnbDXhkFPSuk7qOqnayWWxOWNviI05khunMXHNZvW0DaWqlawMbA3K2Ih925Q1uxJvoXHfXrfdZt07/n15zb141D3kcUe2SFzyfLb/AAVx4Q91HUyRucbgjS5+ZjTax9VZafA/23UNY2QPY4NjLmg2IuS5rT84Ivd1rZXOA11F4p4mUeKTNDGi+U3yi/wt5qdNfq5JnyXXxXcK4eqMQN2xENPzO8I/PU+y9HaHhbKYU1FDa4dme8/jfZova52J06ZVoeNcURYd4WESSfhB0b/UeXpuq1hOGjEHOq6g+CMl5J+Zw1/L9bBYed3cI8CUuHBr5B38u+Z48Lf6Wbe5ufRXbOActxe17c7eiyXGcYxOWc0lMws8LXEsHiGcXs6R2jLG40sdN9bKe4C4flwWd76meN00jbd33mZ52NyTqbe/qt41F+REWwREQEREBERAREQEREBERAREQEREBERAREQRHFHD0PE9O6Cdt2nVrhuxwvZw89SPMEjmsz/9HZ4DdtXG4N1aHMedttC4gfVbGiCjcFcHT4VL39TMHuAIYxrbBtxqTe9zbTy876VTtLw+snxZohcWxPiYSc2Vt7vaQSNTo0aa7rZFkXb66ajFJLG9zGkvjdlNrmzXN1GuzXqaE3heC0eCNBqZRJJb4BfT+0an1Oikm4q3FDmy5KaDxEaeIj4BYaDXks34Gw+TGvHfLGNXyu2HXX5itCo+7rXZIwW0sAzvP+8I5nre30B8lzqqtxLDNe4mdC6cunne3NaKJrbNByakW1tz0Xn2e/YKWtjEMlRLM4OGcsYyP4Tfwkl/1U5j9M+sa6FrC6ep8Ulv4bB8LSeQ636Lh4I4BfhdQyd07D3ZPgDSbggjR9/PpyTG9DTkRF1QREQEReuadsHxODfUgXQexFSsa7TKLDZRA3PLLnDC1rSA0kgeJz7aC/y5vReGNY7VtfkaWDOCY2NOUhg0Mk0z7iOO+gytzHlroM3KQXCrrYqIAySMjubDM4C56C+58l72uDhcag81jGLYZJVu71tbRvfbV3cZxYa2757JXOHmSB6Kw8K4w/DWtp5LRF7TkcwNMbjY2fDk8BG12N9cvxOUmS6aOir0OPSQy0sL4u8EzLGpiIMedoJI8gcpI18tbKfZIJNiDYkGx2I3HqFtHkiLwkmbFbM4C+1yBf06oPNERAREQEREBERAREQFWu0LCY8Wond60OEREovsMtwT/wArnKyr1VdO2sjfG8Xa9pa4dQ4WI+hQfPcHFDsTe2lgFor5WtGneHl6DoPc+Wz4LQtpoo4B/XIfxEW09CR9GLDuEMKdgdVMZNXwSmAX/FfKX26ZSCPJyvuO8X90fs0R8TrB7gdRfZt/19fNc8vqrgKtjzIRd0YP3jxfNK47Rt8ht6epK8aDDKiWoFS9/dWGUQix8HJp5Drff0Xqro3ULIqeDV7rhruht4n+tjoeQuurC+FIKSznZpZdzI5zt/IA6fque1e7HuIxgLO8lgldGN3xZXZf6gS0geeoUbSdoMFbG+SKCpkaz4i1jDbS+2fopTHcPlmYXU72iQD4HjMyUW+Fw3BP4hr1uNFltJCafvayga6GaA2qaN2rSBcm3UbkW6aW2O/LJPS6Yd2jsxlsppaWV5ibmIe5jM172Ayl1zoo6u4/qqih+10scOhIkjdne6K2h1Bbe250GnVVqqkjoTDi1IC2J7stREPlJ0dp6+18p5rs4ld/svVMrIhmp6nSZg2dzzDlctJI9D1Typ6dPDnFVRxdBPE+YxzgeF0ZLLA7EZddDodTuFSeGcZmwmu+/c9xee6lzOLjvYElxucrj9Ceq68Si/2Qr46iE3gk+8Zb5o3fE32vp/avV2lQNpqzvWfDKxsjSNidrj6A+6a2befaTh32KtjlbvJZ1h+JpA09fD7q6MrqaN2eWtiY/QNDYzMWAXI1AMeYFzuTrXNiLm/PHjVLi8jJpKIzlgszvXBrWg2v4bHMdNyNOXMm0UuKUDgM9JHGP+HGQPoL/kk12OGlklxLWkxd75BsyWJgDvL4B+QK9baY1hfE+KNkxPjgdpFUH8QA/dS8w9p1/SXxfAIpohNRtaDbMBHoHjytoD0XBh+IR8Ut7p5DKpg8LrWz25HzHT3HMKj94fxUU0hp3klhPjjl0miPXMNJmafHo9os43FyPHh10XBsk0Ms75XumBsflZIfC9xO51OZ3MtNgvyqpW459xU3iqY7d1Ps4EagEjfXUHnfTXUw1Dj8mH1b2VNC6eqiiDCWNvna1xcwg2PJ55bAHqBqVGjcQwz1MDo6Z7Y5H6CQ38A5kW522X5UYFDWiPvm98YyHNc86hw+bSwB05ALp7x9RCHtbZ5aHNY+4s4i+V2lxvY6adFzcOYhJicAfJGY33ILSLag20v9PUHlZaHFjtAKDvKyN8jHsbnkAJc17WC5uwm18oO1l4cMcYwcQOMbSBIBmDb6Pb1aefmOS9PahigwnCqp/N0Zib/VL4B9M1/ZfPXDuJSYe5ssbrPicHNd/wBvwm9iOYJU+D6uRcGA4o3GqeKdnwyNBt0OxHsQR7LvVBERAREQEREBERBlPathpwqQ1jB4XmN0mnzRkBx9XRDT/hlZnxEx9BOZGm7ZDnY7fXe3+R5ei+k8cwxuMQPhfazhYeR5H/zldYHT0hpzJhtU0hzLiMndzRtY/ib+luSlGlU2PRyPiqM1x3LreQcWOv8AS+qkqqt/2ijy93Vxwg3MjTFG1wHMl5vl8h7rKMKhfSxyUchv4XCN22djtNOhaTYjlcK8UPaBTYmwxSQd41hy+LLY5dPhOnpdcdaaSdB9nwq7qWs70gEmAyMdntvly2ubX2BUBwRUCsxSvdu0hoPQkeE/m1ysUWKYdiJax0AZzDsrRlI2ILDcEHmq32b0ooHVz75gJ3MDjrmEZdr53zXVRHYLB3mE4lH8rJXlu/yhp/6QuioH7X4fa46uhA9u7dl/+BXs4MjM+EVryP3hmdtv4By23XjwDO2TCqpjzpd7R/cwH9VrSIRpbiuCvzH7ykfdvUsOtvoTp/IF44DilNizqV9aQe5a9jI7XBtlsSOdhtfTXyUTwFUfaZJo3bPj29Db9HLi4d4cdWOe4y5DE8s0FySN+e2q1obrQ8R4e0BpyMHnGAPyGnuvZxRgcWO0jjT5A8tzRvZYB3OxI0Idtfle6z6n4O/aDbR1J7y2jXtFnEcswOl+tio/hzimp4MldBNG4x3u+F2jmH8TCdNfoeR5poSXZ1xgcEkNLUktic6wzfwn3sQejSd+h15lWvjfhU1V6qk0mb4nNb/Etrdttnj8/VQXFmAw8Xx/bKJzXS28bRp3lhsR8rwOu/PkVHcC8fPw5wpasnIDla9180Z2yuvy5a6j02CyYFi7eNITG+zayIeE7d40b36a6EcjrzIXk/EqmRzDAxrqxoMfjsM8didbkascOvznzUZxxQnCZW4nSmzmuBkA2N9M/mDezvW/Vdtfh7eNaproZXQtEIlEjRf74hujgdHNaxwDm7kyDa100baHhkj5YY3SZe8LG58pu3NYZrHpe64cVxqLBZI2yE/fuDWAC/izNafQeNv5qBxilxLDqaGGgYzMwnM7MyzhY8ngWJcbnRSFZw3+2aqnqp/D3AuIgbhztC0k7DKbnTc2ubCxo9Hadw2/imhMMZs9r2yAfiy3Ft+jr+oCw+g4IrmyFpp3am17dLX5bf8A5ZfTiKivcBYM/AaJkMnxAuP1N9fNWFEQEREBERAREQEREBVDj7gxvErBIzwVEerHjQm3nyPQnQ7HTa3ogwATviPdVLMr2m2bUAn9Y3eR3voSo6HFY8AqckdKJpHkucXanxFxAAsdgtx4o4Wix9pP7uYCzZAPycPmb+Y1sRcrDZJ/2BIZKmIh5+68IHgy5iWnxWvfp0WbBfKPitz4yyTDgGm+pDm/nk09brkgnZg+FzZTqWyOsTc3kLsoPWwc0eyYV2kxU9OWQtdJJbTMLNb68z6D6qlcRVDq/JTj4pX5nW5NGp9Nf0WZCr/w85uGYNYnV0MjrcyXZiPyIVT7OJTJFNfbONP7V1TV3fQvaDoGOYPYEafT8lA9nsuSOX+pv6LSI/heT9n14adNXxn87fmAvPG556Cte2ne4d6Q8NGXxE6fNpuCuPE2mDECR/vWn6kH/KluK4rvhkHxB9v8/wCFVeeG49ieGva8xl+U7FgP/wBZBV8n4yoOJ2CHEad0LxoJBc5D1DgA9noQR1uqkcaipyRI8NINtb66X0stA4Xr8P4mp+6ndBI5ugzOaHWP4TcOb7IihYvhtTwU8VFLN3kDvhlbYhwOzXgaG/UadLFcmLPi4raZ4i2OpA+8jJsH+d/8+xV2xXhOTh5r30jjNTOBMlI+7swtrksDc25WuepWQAsje4xVPdguPhLXggXNgTa5sg0Dg59S2B1PK8CIi7nHUxMt4mgnTX3tyV67NKynxKSd0RN4mtja0E5WMcXEW5F7nMc5zv6RfTTFWMfWjuzUTzhxH3UTH2eeQLj4d+q3vs8wCTh+nDJAyO7R91GLhp1uXSnWR5vryFtOqC2oiKqIiICIiAiIgIiICIiAiKHxrGDQnu44y+QtzC/wjffmdtvzQd9fXR0Dc0jgL6Ac3HoBzKy+u7VpG1b42MY2JrQ4Ne1xeQC3vL2IsQ0u0GxYd1J0WFy8UzZqh72NA5W5EWyEGzOu1zrvo4XuhwyHDwe7ja2/xEAXd6u3d7oKlT9obBP3MsVi5ueJ7HAiUcwM1rO8rnTVZ5xZVU2L1b544yRJZr2TOI7uQeFzDHqxpIaCHA6kutfnsOLcKUeMZe+p2Et+Fzbsc3bZ7CHDYbHkqbx7wI2CJ9XS5jMxoD4nEZZmXF82xBa27g699PRSiscDcOUdRM6a7gI2l7oHWOoBIvztfXcg6clJYj2W1dKXOp5YpXu0L3lzHW8m2c38wo/hnh6ox4ueGOiLHtbmEjQ/KdTfLo5psWuHPcAEm+4qSDDG8G1+GxCP7O9wAOrS1177nwknUlReB8O1eFMLTSz3JufupNOXIL6HRXQ+djwnWYhU94KWYAEG7o3N283AKzwdnNZibmmXJC1pv4nZj5aMuPqQtiRNCgnsqo5YJI5HPfI8aS7ZHcnNaNNOhJ0uOZWa0vA0eGVXcVFSIjfKS4NtrsRdw0PVfRCpHabwdDxDD35jc6aBpIyaOe0alnnzLR1vb4iqOXgygwvCaoRU8zpqjK7xEkgW3AygM29Top7iLg2nxy7rd3Kf4jBuf5hs79fMLL+FOIaSnMEtJRSSTh1i5z3F2oscjGkglzCVuTXZgD166fkoMSxDAcU4WmD2RRSxtNxM0kgf1MtmafqB+JXSj7RYHxAOeHVTrNEDRu46aAXOX1N1elT8d4Cgnc+ekbHTVZ1Egb4Sf5mtItfm4a8zm2QWKirs2WORzGz5Q50YOvrb29vPddyyHhetPDtVJJjMn+rdpENHX+UFob+KwDSALC4NiSBcsA4w/blY6FjCIhG5wcRuWuaPi2PxbC9rb8kFsREVBERAREQEREBERAVZ40p84jdluDmY6wvoW5r+2Q/VWZQ3Fju7p843Y9jh/wAwH+UEpT07aZoawWAFgB5afovasH4u43qMVqqOOlnMbGTRtJicbOe5+WxN/G0AAWNwbu994QF4TRiZpadQQQfQ6LzRBlPZLTVmHVlVFUuLm2LW3I1MbyMwaNAHB1/Zass3rhJhXEMTrSGOdu5kAYzM0ssGaFxztaTe9s/mtIQEREBERAREQZDNX1XCuIVTKSga6LcOYw65g197NN9HOI9laOzjiaq4m758zGtiYQ1pAI8fMC5N7C178yPNVulOJYpWyvpZ6d8Eshyuu1+SMOtewsSQ3lfUm11q0EIgaGjYfn1PqTqoPYiIqKj2k4bHNSmqMQkkpAZWaAmw+IC/kM39oXu4R4gqcee90lKaeAMBjLg67yT1IAtby91ZpYxK0tOxBB91T+zqgkomyd7Xfan5Y2Obf9yWZ7i2YgXuOQ2QXJERAREQEREBERAREQFV+0vC5cXwyojhc4SZcwDfnyEOLP7gCPUhWhEHy32eUor62ib0qWuH9n3n/SvqRZthfAJwjG/tEbf9MRJM238ORwyOZ6HvHOb5XHy66SgIi9TqhjHBpc0OIuGki5HW26CsdoUT4o4aiP4oJA46m2U73ABLtWtsBrcq0wyCZoc03DgCD1B1UFxbWwyU0kRexziBZujrEEEEjlYi9z0XP2f4iaunMZuTEcodY2cDcjkBcajToOqC0IiICIiAoDjbHRgFK6QsdIXEMaxt7nNubjazbn1sOanibKMZE3EZGy3Ba34R087HUEkX9GhBwcGcMU/D8ZdFB3L5Q0vaXZi2w0Zc8m3Og0uSrGiICIiAoDhPCI8L78x3vJM97rm+pc76DyU8TZcWG1Ac1oOhIzDzza6fVB3IiICIiAiIgIiICIiAiIgIiIKT2nY/XYNCBQ00kjn3zTNZnEQ8mC5LudyMo89lknDVZI+OaWZz3TGWzjJcuJDW2Bzajc6cl9Ir8yi97a9UGW9nMshqT3lO57XjSTJpER57AHbrt5rU0RARFF8SMq5YHNonRMmOgfLmswcyAGm56X05m9rEPzHuIqXh5uapmbHfZp1c634WNu53sFVsF7VqPF6h8IZKwBuZr3Bv3gB1s0EkW0PU3OgsqFX9kWLVr3SST00j3G5e6aYk+5i5flyXrpeyPFaKVkrHUuZjsw+9k9x+72IuD6oNLxPiaTFj3NFE55+Ymw0882zepO+w87FgbJGsPeMaxx3DSTqNOY20BHqVy8K4M7CGPz5czyCQ3W1htfS/06qcQEREGUdoPalNg8joKaB0eU2NRURva0n/ANtjrZh/MTbTYixVS4MxebijEGfaaiWYBsjgC8ht7WaQxlmAjNcEAEFoK+gyM2hXD+xKbOJPs8PeC4D+7ZmsdxmtfVBn1RVVdbUx0JnkEUu73AAgAOJaHWBcfDbXqN1fMKwGLCg0R57NHzPcbnrqba67CykI6dkXwtaPQAL2ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z'}}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  image1: {
    height: 100,
    width: 100,
  }
});