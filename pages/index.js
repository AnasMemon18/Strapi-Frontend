import Description from "../components/Description/Description";
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Outsource from "../components/Outsource/Outsource";
import Clients from "../components/Clients/Clients";
import ToolsTechnologies from "../components/ToolsTechnologies/ToolsTechnologies";
import Industries from "../components/Industries/Industries";
import ClientResponse from "../components/ClientResponse/ClientResponse";
import Count from "../components/Count/Count";
import DNA from "../components/DNA/DNA";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import Subscribe from "../components/Subscribe/Subscribe";
import Career from "../components/Career/Career";
import Footer from "../components/Footer/Footer";


export default function Home({ headers, logo, services, teams }) {
    return (
        <div>
            <Header headerItems={headers.data} logo={logo} />
            <HomeBanner />
            <Description />
            <Services services={services} />
            <Team teams={teams}/>
            <Outsource />
            <Clients />
            <ToolsTechnologies />
            <Industries />
            <ClientResponse />
            <Count />
            <DNA />
            <LatestBlogs />
            <Subscribe />
            <Career />
            <Footer />
        </div>

    );
}

export async function getStaticProps() {
    try {
        var serviceObj = []
        var teamObj = []
        const res = await fetch("http://localhost:1337/api/new-headers");
        const result = await res.json();

        const getImage = await fetch("http://localhost:1337/api/logo?populate=*");
        const image = await getImage.json();
        const newImage = image.data.attributes.image.data.attributes.formats.thumbnail.url;

        const getServices = await fetch("http://localhost:1337/api/services?populate=*");
        const services = await getServices.json();
        

        for (let i = 0; i < services.data.length; i++) {
            serviceObj.push({
                title: services.data[i].attributes.Title,
                description: services.data[i].attributes.Description,
                image: services.data[i].attributes.Image.data.attributes.url
            })
        }


        const getHireATeam = await fetch("http://localhost:1337/api/hire-a-teams?populate=*");
        const hireATeam = await getHireATeam.json();


        for (let i = 0; i < hireATeam.data.length; i++) {
            teamObj.push({
                title: hireATeam.data[i].attributes.Title,
                description: hireATeam.data[i].attributes.Description,
                image: hireATeam.data[i].attributes.Image.data.attributes.url
            })
        }

        console.log(teamObj)

        return {
            props: {
                headers: result,
                logo: newImage,
                services: serviceObj,
                teams : teamObj
            },
        };
    } catch (err) {
        return {
            props: {
                headers: [],
            },
        };
    }
}