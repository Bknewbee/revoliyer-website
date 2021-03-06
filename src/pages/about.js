import React from 'react';
import './about.css';

//import aboutBg from "../images/aboutBg.JPG";
//import portImg from "../images/portrait.jpg";
import ggImg from "../images/Gg-face.jpg";
import brownImg from "../images/Brown-face.jpg";
import lesediImg from "../images/Lesedi-face.jpg";
import tsietsiImg from "../images/Tsietsi-face.jpg";
import teamImg from "../images/team.jpg";

function About (){
  return(
    <div id="About">
      <div className="header cormorant" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        <h1>Rivoliyer Holdings</h1>
        <div className="cormorant">
          <h2>Our Mission</h2>
        </div>
        <div className="montserrat">
          <p>
            Our mission is to make our mark in the mining industry as a 100% owned company
            <br/> with the help of our well developed, highly qualified and experienced team that enables us to be proficient in :
            <br/>EMV Tyre/Rims and Chains Management,
            <br/>Maintain & Repairs of Earthmover Tires,
            <br/>Training in Earthmover Tyres, Rims and Tires Chains
          </p>
        </div>
      </div>
      <hr/>
      {/*
      <div className="row content" style={{paddingTop: "100px",paddingBottom:"30px"}}>
        <div className="col-md-6 text-center">
          <img className="img-fluid grayImg"  src={ggImg} alt="Portrait of manager"/>
        </div>
        <div className="col-md-6 text-center">
          <p className="cormorant" style={{margin: "10px auto", fontSize: "22px",textDecoration:"underline",textTransform:"uppercase",fontWeight:"bold"}}>Gaolatheope Gomosie</p>
          <p className="montserrat">- technical director -</p>
          <hr/>
          <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.</p>
        </div>
      </div>
      <div className="row content" style={{paddingTop: "100px",paddingBottom:"30px"}}>
        <div className="col-md-6 text-center">
          <img className="img-fluid grayImg"  src={portImg} alt="Portrait of manager"/>
        </div>
        <div className="col-md-6 text-center">
          <p className="cormorant" style={{margin: "10px auto", fontSize: "22px",textDecoration:"underline",textTransform:"uppercase",fontWeight:"bold"}}>Emmanual Bhuka</p>
          <p className="montserrat">- commercial director -</p>
          <hr/>
          <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.</p>
        </div>
      </div>
      <hr/>
      <div className="row content" style={{paddingTop: "30px",paddingBottom:"30px"}}>
        <div className="col-md-6 text-center">
          <img className="img-fluid grayImg"  src={lesediImg} alt="Portrait of manager"/>
          <p className="cormorant" style={{margin: "10px auto", fontSize: "22px",textDecoration:"underline",textTransform:"uppercase",fontWeight:"bold"}}>Lesedi Dithapo</p>
          <p className="montserrat">- administrator -</p>
          <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.</p>
        </div>
        <div className="col-md-6 text-center">
          <img className="img-fluid grayImg"  src={brownImg} alt="Portrait of manager"/>
          <p className="cormorant" style={{margin: "10px auto", fontSize: "22px",textDecoration:"underline",textTransform:"uppercase",fontWeight:"bold"}}>Brown</p>
          <p className="montserrat">- trainer -</p>
          <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.</p>
        </div>
        <div className="col-md-6 text-center">
          <img className="img-fluid grayImg"  src={tsietsiImg} alt="Portrait of manager"/>
          <p className="cormorant" style={{margin: "10px auto", fontSize: "22px",textDecoration:"underline",textTransform:"uppercase",fontWeight:"bold"}}>Tsietsi</p>
          <p className="montserrat">- technical supervisor -</p>
          <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni.</p>
        </div>
      </div>
      */}
      <div className="profileImg row" >
        <div className="col">
          <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top grayImg"  src={ggImg} alt="Portrait of manager"/>
            <div className="card-body">
              <h5 className="card-title">Gaolatheope Gomosie<br/> - technical director -</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top grayImg"  src={lesediImg} alt="Portrait of manager"/>
            <div className="card-body">
              <h5 className="card-title">Lesedi Dithapo<br/> - administrator -</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top grayImg"  src={brownImg} alt="Portrait of manager"/>
            <div className="card-body">
              <h5 className="card-title">Gaolatheope Gomosie<br/> - trainer -</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top grayImg"  src={tsietsiImg} alt="Portrait of manager"/>
            <div className="card-body">
              <h5 className="card-title">Tsietsi<br/> - technical supervisor -</h5>
            </div>
          </div>
        </div>

      </div>
      <hr/>
      <div className="container-fluid text-center" style={{position: "relative", }}>
      <img className="img-fluid"  src={teamImg} alt="team" style={{width: "100%"}}/>
      <h2 style={{position: "absolute", top: "5%",left:"39%", textDecoration:"underline"}}>TEAM</h2>

      </div>
      <hr/>
      <div className="row content">
        <div className="col-lg-4 cormorant">
          <h2>Our Story :</h2>
        </div>
        <div className="col-lg-8 montserrat">
          <p>
            Rivoliyer Holding is a 100% owned company with 2 partners Gaolatheope Gomosie and Emmanual Bhuka
            who have with them a vast experience on managing EMV tires, rims, chains and fitments of the same from different mines inspect in
            Botswana and across the border in Mozambique, South Africa and Namibia.
          </p>
        </div>
        <div className="col-lg-4 cormorant">
          <h2>We Supply :</h2>
        </div>
        <div className="col-lg-8 montserrat">
          <p>
            Rivoliyer Holding supplies EMV tires and rim accessories (HALTEC) portable electrical, hydraulic machines & tires in general
          </p>
        </div>
        <div className="col-lg-4 cormorant">
          <h2>Social Work :</h2>
        </div>
        <div className="col-lg-8 montserrat">
          <p>
            Rivoliyer Holding commits monthly 2% of our management fee to the society as part of our social responsibility under the Social Performance Policy.
          </p>
          <p>
            This Social Performance policy which was put into effect on 11/08/2020 and will be reviewed on 11/08/2020
            sets out our approach to managing our social and miximizing opportunities for social and economic benefits in the work we do,
            all of which is key to achieving our companies vision.
            <br/>We expect everyone who works for Rivoliyer Holdings (Pty) Ltd to apply the following key principles to guide  our work activities.
            <br/>We will improve our social performance , deliver local social value and leave a sustainable legacy for future generations.
            We shall demonstrate respect for the rights, cultural beliefs and relieve concerns for all parties having a legitimate interest in tire management.
          </p>
        </div>
        <div className="col-lg-4 cormorant">
          <h2>Contracts :</h2>
        </div>
        <div className="col-lg-8 montserrat">
          <p>
            Rivoliyer Holdings currently has a 3 year contract with Debswana for OTR Tyre, Rims and Chains Management in Orapa and Letlhakane mines
          </p>
          <p>
            Rivoliyer Holdings has another legal agreement with Majwe Mining Company which is the supply of Automotive Tyre & Rim accessories.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
