import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { getError, getIsLoading } from "./redux/selectors";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
