// import './App.css';
import React from 'react';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => contact.name.includes(data.name))
      ) {
        return alert(`${data.name} is already in contacts!`);
      }

      return { contacts: [...prevState.contacts, data] };
    });
  };

  deleteContact = currentId => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(contact => contact.id !== currentId),
        ],
      };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLocaleLowerCase() });
  };

  turnOnFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  // вызывается при первом ренрдере
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  // вызывается при обновлении DOM
  componentDidUpdate(prevProps, prevState) {
    // нельзя использовать setState() -> бесконечный цикл
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
          {this.state.filter === '' ? (
            <ContactList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          ) : (
            <ContactList
              contacts={this.turnOnFilter()}
              deleteContact={this.deleteContact}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
