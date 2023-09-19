import PriceCard from './components/PriceCard';
import './App.css';

let data = [
  {
     plan:"FREE",
     price:"0",
     users:"Single User",
     usersEnabler:true,
     storage:"5GB Storage",
     storageEnabler:true,
     publicProjects:"Unlimited Public Projects",
     publicProjectsEnabler:true,
     communityAccess:"Community Access",
     communityAccessEnabler:true,
     privateProjects:"Unlimited Private Projects",
     privateProjectsEnabler:false,
     phoneSupport:"Dedicated Phone Support",
     phoneSupportEnabler:false,
     subDomain:"Free Subdomain",
     subDomainEnabler:false,
     statusReports:"Monthly Status Reports",
     statusReportsEnabler:false
  },
  {
    plan:"PLUS",
    price:"9",
    users: <strong>5 Users</strong>,
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false
 },
 {
  plan:"PRO",
  price:"49",
  users:<strong>Unlimited Users</strong>,
  usersEnabler:true,
  storage:"150GB Storage",
  storageEnabler:true,
  publicProjects:"Unlimited Public Projects",
  publicProjectsEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler:true,
  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,
  subDomain:"Unlimited Free Subdomains",
  subDomainEnabler:true,
  statusReports:"Monthly Status Reports",
  statusReportsEnabler:true
}
]

function App() {
  return (
    <div className="App">
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        <PriceCard data={data[0]}/>
        <PriceCard data={data[1]}/>
        <PriceCard data={data[2]}/>

      </div>
    </div>
  </section>
    </div>
  );
}

export default App;
