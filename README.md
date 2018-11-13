# maana-code-challenge
This repository holds all of the codebase for the application built to satisfy
the requirements of the code challenge designated by my interviewer Roie Cohen 
at Maana. The purpose of this app is to provide some insight to my capabilities
as a programmer. This App is designed to compare two JSON based RESTful
endpoints and allow a user to map data points on the objects returned from
each endpoint.

## Essay:
**What I'd like to build with Maana:**

This world is becoming increasingly connected, between the internet of things trend, increasingly 
easily accessible APIs, and a human need for constant innovation, services are required
now more than ever to facilitate the communication between all of our devices. In the near
future all of our systems will not only be able, but required to, talk to one another. Between
your home, your car, your clothes, and yes even your blender, everything will be connected.
This inevitability will lead to one of two possible outcomes. The first, which I see as unlikely,
will be that every connected device will be able to implicitly talk to the other through
a single standardized API. The sheer amount of effort required to make every device compliant
to a single standard makes this possibility not very feasible. The second possibility is that
there will have to be a system (or systems) that act as a middleware layer between all connected devices that
route the data to the desired receivers. This seems like the most likely scenario and where I
think that the Maana platform would excel. By Having an intelligent system that can learn
how to implicitly map different endpoints the instant they are added to the system, the more
easily those APIs can be manipulated and consumed in ways that either have not been
considered before, or would have taken too much manpower / resources to feasibly implement.
A conceptual example of what I want to teach it is as follows: Given three endpoints A, B, and C,
a user would map the data nodes between endpoint A and B, then between B and C. Ideally, the
Maana platform would be able to implicitly know how the data nodes between endpoints A and C
are mapped. Once You start adding endpoints D, E, F, etc... and map their data nodes to 
endpoints A, B, or C, it would start to build a graph of api endpoints that Maana could
then use to learn all the different ways that those endpoints can be interconnected. I want to
empower people to take control of their own life. In a world where we have access to
the sum of all human knowledge literally at our fingertips, it is easy to feel
overwhelmed by it all. Having a platform such as Maana be able to learn how all that
knowledge is connected will make it easier to streamline business and human processes
giving us the power to focus on whats important... each other.

## Installation
1. `git clone` repo into directory of your choice
2. ensure you have node v8.10.0 or later installed
   - if you have node version manager you can run `nvm use`
3. `npm install`
4. ensure webpack is installed globally with `npm i webpack -g`
5. `npm run build`
6. `npm start`
7. navigate to `localhost:3000` in your browser.
8. PROFIT! 

## Usage
To define an integration there must be two RESTful endpoints specified, a
source endpoint that returns data when queried, and a target endpoint which
accepts data. 

The purpose of this simple applicaition is to be able to map aspects of one API endpoint
to aspects of another. Currently this application only focuses on request and response bodies
but as it grows it will be able to map any part of an HTTP request to another. This would
include path parameters, query fields, headers, and the request / response bodies.

Currently Adding new endpoints is disabled, there are two mock endpoints added to the 
in memory "database" at application run time for the purposes of Proving the concept.

To define a mapping between endpoints click the '+Add' button in the 'integrations' section
of the '/' route. This will redirect you to the '/addIntegration' route.

once you've been redirected, you will be able to select two endpoints and view them side
by side and select any data points that you would like to map between them.

Current restrictions:
- Currently it only maps between request or response bodies (any combination thereof)
- Currently mappings are only able to exist with a 1 to 1 relationship, meaning one to many, or
many to many relationships don't work.
    - this has the side effect that an error will be thrown if you try to select an array or an
    to map.
    
### GraphQL Models

#### getEndpoint(id)
- returns: single endpoint object with a given ID
```
{
  getEndpoint(id: ID){
    id
    hostname
    api {
      pathParts{
        name
        isRequired
        isVariable
      }
      queryParams{
        name
        param
      }
      requestMethod
      requestBodyObj
      responseBodyObj
    }
  }
}

```

#### getEndpoints
- returns: list of endpoint objects
```
{
  getEndpoints {
    id
    hostname
    api {
      pathParts{
        name
        isRequired
        isVariable
      }
      queryParams{
        name
        param
      }
      headers{
        headerName
        headerValue
      }
      requestMethod
      requestBodyObj
      responseBodyObj
    }
  }
}
```

#### getIntegration(id)
- returns: single integration object with a given ID
```
{
  getIntegration(id: $id) {
    id
    endpointAId
    endpointBId
    mappings {
      pathA
      pathB
    }
  }
}
```

#### getIntegrations
- returns: list of integration objects
```
{
  getIntegrations {
    id
    endpointAId
    endpointBId
    mappings {
      pathA
      pathB
    }
  }
}
```

### MongoDB Models 
*MongoDB is currently not implemented