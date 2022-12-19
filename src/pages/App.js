import { useState } from 'react';
import Input from '../components/input';
import ItemRepo from '../components/ItemRepo';
import gitLogo from '../images/github-branca.png';
import Button from '../components/Button';
import { api } from '../services/api'

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id){
      const isExist = repos.find(repo => repo.id = data.id)

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
      }
    }
  }

  const handleRemoveRepo = (id) => {
    console.log('ID =', id)
    const newRepos = repos.filter(repo => repo.id !== id);

    setRepos(newRepos);
  }


  return (
    <Container>
      <img src={gitLogo} alt="Logo Github" width={72}/>
      <Input value={ currentRepo } onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={ handleSearchRepo }/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
