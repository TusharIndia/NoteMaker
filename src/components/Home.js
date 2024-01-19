import Notes from "./Notes";

const Home = (props) => {
  return (
    <>      
        <Notes alert={props.alert}/>
    </>
  );
};

export default Home;
