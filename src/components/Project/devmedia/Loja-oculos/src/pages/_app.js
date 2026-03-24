import "@/styles/globals.css";

export default function App(props) {
  const ActivePage = props.Component;

  return <ActivePage {...props.pageProps} />;
}
