import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CardCreator = props => {
  return (
    <div>
      <Card>
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
            <Card> {props.followers.map(followme => {
              return (
              <div className='follower-div'>
                <CardImg src={followme.avatar_url} />
                <CardBody className='followersinfo'>
                  <CardText>{followme.name}</CardText>
                  <CardText>Username: {followme.login}</CardText>
                  <CardText> Click below to see my work on github! </CardText>
                  <Button>{followme.html_url}</Button>
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