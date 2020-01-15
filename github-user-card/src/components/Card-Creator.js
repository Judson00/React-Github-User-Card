import React from 'react';

import '../app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CardCreator = props => {
  return (
    <div>
      <Card style={{backgroundColor: '#478af5'}}>
        <CardImg src={props.user.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {props.user.name}</CardTitle>
          <CardTitle>Alias: {props.user.login}</CardTitle>
          <CardText>Location: {props.user.location}</CardText>
          <CardText>Public Repos: {props.user.public_repos}</CardText>
          <CardText>Followers: {props.user.followers}</CardText>
          <CardText>Following: {props.user.following}</CardText>
          <CardText>Bio: {props.user.bio}</CardText>
          <CardSubtitle>Followers: </CardSubtitle>
            <Card style={{backgroundColor: '#749fe3', border: '1px solid white'}}> {props.followers.map(item => {
              return (
              <div className='follower-div' style={{backgroundColor: '#4775bf', border: '1px solid white', margin: '10px', padding: '10px'}}>
                <CardImg style={{marginTop: '18px'}} src={item.avatar_url} />
                <CardBody className='followersinfo'>
                  <CardText>{item.name}</CardText>
                  <CardText>Username: {item.login}</CardText>
                  <CardText> Click below to see my work on github! </CardText>
                  <Button><a style={{textDecoration: "none", color: "white"}} href={"https://github.com/" + item.login} target="_blank" rel='noopener noreferrer'>{item.html_url}</a></Button>
                </CardBody>

              </div>
            );
        })}</Card>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardCreator