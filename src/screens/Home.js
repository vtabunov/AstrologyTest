import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Switch,
  Animated,
  ClippingRectangle,
} from "react-native";
import RNExitApp from "react-native-exit-app";

import SvgSun from "../svg/SvgSun";
import SvgBigSun from "../svg/SvgBigSun";
import SvgClose from "../svg/SvgClose";
import SvgCalendar from "../svg/SvgCalendar";
import SvgWarning from "../svg/SvgWarning";
import SvgLight from "../svg/SvgLight";
import {
  white,
  violet,
  inactiveText,
  yellow,
  yellow2,
  switchOff,
  switchTrackOff,
} from "../constants/colors";
import SvgVector from "../svg/SvgVector";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [anually, setAnually] = useState(true);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={s.scrollView}>
      <View style={s.container}>
        <View style={s.header}>
          <View style={s.emptyView} />
          {!isEnabled ? <SvgSun /> : <SvgBigSun />}
          <TouchableOpacity onPress={() => RNExitApp.exitApp()}>
            <SvgClose />
          </TouchableOpacity>
        </View>
        <Text style={s.text}>Your report is ready</Text>
        <View style={s.container2}>
          <View style={s.container3}>
            <View style={s.iconContainer}>
              <SvgCalendar />
            </View>
            <Text style={s.text2}>View your personalized horoscope</Text>
          </View>
          <View style={s.container3}>
            <View style={s.iconContainer}>
              <SvgWarning />
            </View>
            <Text style={s.text2}>Get to know about life threats</Text>
          </View>
          <View style={s.container3}>
            <View style={s.iconContainer}>
              <SvgLight />
            </View>
            <Text style={s.text2}>Explore ideas for your happiness</Text>
          </View>
          {isEnabled && (
            <View style={s.container3}>
              <View style={s.iconContainer}>
                <SvgVector />
              </View>
              <Text style={s.text2}>Look at more data about your life</Text>
            </View>
          )}
        </View>

        <View style={s.absoluteContainer}>
          <View style={s.container4}>
            <Text style={{ ...s.text4, marginBottom: 5 }}>
              Free trial period for 7 day
            </Text>
            <Text style={{ ...s.text3, textAlign: "left" }}>
              Cancel anytime
            </Text>
          </View>

          <Switch
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              alignSelf: "center",
              marginRight: 28,
            }}
            trackColor={{ false: inactiveText, true: yellow2 }}
            thumbColor={isEnabled ? yellow : white}
            ios_backgroundColor={switchTrackOff}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        {!isEnabled && (
          <>
            <View style={s.btns}>
              <TouchableOpacity
                onPress={() => {
                  setMonthly(true);
                  setAnually(false);
                }}
                style={monthly ? s.subscribeBtnActive : s.subscribeBtnInactive}
              >
                <View style={s.container5}>
                  <Text style={monthly ? s.textBtnActive : s.textBtnInactive}>
                    Monthly
                  </Text>
                  <Text
                    style={{
                      ...s.text3,
                      color: inactiveText,
                      textAlign: "left",
                    }}
                  >
                    949,00 $/month
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnually(true);
                  setMonthly(false);
                }}
                style={anually ? s.subscribeBtnActive : s.subscribeBtnInactive}
              >
                <View style={s.container5}>
                  <Text style={anually ? s.textBtnActive : s.textBtnInactive}>
                    Anually
                  </Text>
                  <Text
                    style={{
                      ...s.text3,
                      color: inactiveText,
                      textAlign: "left",
                    }}
                  >
                    3 950,00 $/year
                  </Text>
                </View>
                <View style={s.container6}>
                  <View style={s.popular}>
                    <Text style={s.textPopular}>Popular</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingScreen")}
              style={s.gobtn}
            >
              <Text style={s.textSubscribe}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </>
        )}
        {isEnabled && (
          <TouchableOpacity
            onPress={() => navigation.navigate("WaitingScreen")}
            style={{ ...s.gobtn, width: 303 }}
          >
            <Text style={s.textSubscribe}>TRY 7 DAYS FOR FREE</Text>
          </TouchableOpacity>
        )}

        <Text style={s.text3}>
          By continuing, you agree to the terms of our End User License
          Agreement & Privacy Notice. Please note, if you don't cancel your
          subscription before the end of your current period, you'll be charged
          for the next period according to your subscription plan. All
          subscriptions are automatically renewed. 649 ₽ per week after
          the 7 days trial ends
        </Text>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
    backgroundColor: violet,
  },
  container: {
    backgroundColor: violet,
    flex: 1,
    justifyContent: "center",
  },
  header: {
    paddingTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  emptyView: {
    width: 24,
  },
  iconContainer: {
    marginRight: 16,
    width: 30,
    alignItems: "center",
  },
  container2: {
    marginBottom: 8,
  },
  container3: {
    flexDirection: "row",
    marginBottom: 16,
  },
  container4: {
    marginLeft: 33,
    justifyContent: "center",
  },
  container5: {
    paddingHorizontal: 16,
    justifyContent: "center",
    height: "100%",
  },
  container6: {
    flexDirection: "row",
  },
  text: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
    color: white,
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: white,
  },
  text3: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: inactiveText,
  },
  text4: {
    fontSize: 16,
    fontWeight: "400",
    color: white,
  },
  textBtnActive: {
    fontSize: 16,
    fontWeight: "500",
    color: white,
  },
  textBtnInactive: {
    fontSize: 16,
    fontWeight: "500",
    color: inactiveText,
  },
  absoluteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: windowWidth,
    height: 63,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: inactiveText,
    marginBottom: 27,
  },
  btns: {
    height: 122,
    justifyContent: "space-between",
    marginBottom: 23,
  },
  subscribeBtnActive: {
    height: 56,
    borderWidth: 2,
    borderColor: yellow,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subscribeBtnInactive: {
    height: 56,
    borderWidth: 2,
    borderColor: inactiveText,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gobtn: {
    width: 224,
    height: 50,
    backgroundColor: yellow,
    borderRadius: 11,
    alignSelf: "center",
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  popular: {
    height: 21,
    width: 85,
    backgroundColor: yellow,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 8,
    justifyContent: "center",
  },
  textPopular: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },
  textSubscribe: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Home;
