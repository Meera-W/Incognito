import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../components/AboutComponent/AboutComponent';
import Test from './Test';
import Result from './Result';
import FAQs from './FAQs/faqs';
import Help from './Helpline/Help';
import Cards from './Cards';
//import { HELPLINES } from '../shared/helplines';
import Essentials from './Essentials/Essentials';
import ScrollToTop from './ScrollTotop';
import Symptoms from './Symptoms/Symptoms';
import Dashboard from './Dashboard/Dashboard';
import Precautions from './Precautions/Precautions';
//import { MUMBAIHELPLINES } from '../shared/mumbaihelpline';
import Graph from './../image/gifs/graph.gif';
import Csymptoms from './../image/gifs/Csymptoms.gif';
import testg from './../image/gifs/testgiphy.gif';
import Prevention from './../image/gifs/prevention.gif';
import Mask1 from './../image/images/mask1.jpg';
import help from './../image/gifs/support.gif';
import Process from './Procedure/Process';

class Home extends Component
{

    render ()
    {

        const HomePage = () =>
        {
            const gifIcons = [
                { src: `${ Graph }`, title: "Statewise Graphs Dashboard", content: "Get detailed statewise reports and graphs..", link: "./dashboard" },
                { src: `${ Mask1 }`, title: "Essential commodities", content: "Troubled in getting essential things?... Get here the online shopping of masks and sanitizer,etc...", link: "./essentials" },
                { src: `${ Prevention }`, title: "  Preventive Measures", content: " Follow this 5 rules of prevention & ensure your health safety!", link: "./precautions" },

                { src: `${ Csymptoms }`, title: "Symptoms of Covid-19", content: " Take a quick look and get to know are you suffering from this or not?", link: "./symptoms" },
                { src: `${ testg }`, title: " Health Test", content: "Feeling queasy??? Take a quick health test!", link: "./test" },
                { src: `${ help }`, title: "Helpline", content: " Facing any problem? Need any help? Get helpline number and place a call.", link: "./help" },
            ];
            //  const { classes } = this.props;
            return (
                <div className="home container-fluid ">
                    <div className="row">
                        { gifIcons.map( ( s, i ) => (
                            <Cards
                                key={ i }
                                src={ s.src }
                                title={ s.title }
                                content={ s.content }
                                link={ s.link }
                            />
                        ) ) }

                    </div>
                    <ScrollToTop />

                </div>
            );
        }

        // Specifying the routes for our various pages
        return (

            <div>

                <Switch>
                    <Route path='/home' component={ HomePage } />
                    <Route exact path="/dashboard" component={ () => <Dashboard /> } />
                    <Route exact path="/test" component={ () => <Test /> } />
                    <Route exact path="/result" component={ () => <Result /> } />
                    <Route exact path="/faqs" component={ () => <FAQs /> } />
                    <Route exact path="/symptoms" component={ () => <Symptoms /> } />
                    <Route exact path="/precautions" component={ () => <Precautions /> } />
                    <Route exact path="/process" component={ () => <Process /> } />

                    <Route exact path="/help" component={ () => <Help /> } />
                    <Route exact path="/essentials" component={ () => <Essentials /> } />
                    <Route exact path="/aboutus" component={ () => <About /> } />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Home;