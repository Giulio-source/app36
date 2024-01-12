import { StyleSheet, View } from "react-native";

export const BaseLayout = ({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>{footer}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 32,
  },
});
