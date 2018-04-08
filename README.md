# inter-planetary-sovereign-identity-and-trust-protocol
[![Waffle.io - Columns and their card count](https://badge.waffle.io/realrhys/Inter-Planetary-Sovereign-Identity-And-Trust-Protocol.png?columns=all)](https://waffle.io/realrhys/Inter-Planetary-Sovereign-Identity-And-Trust-Protocol?utm_source=badge)
[![Join the chat at https://gitter.im/Inter-Planetary-Sovereign-Identity-And-Trust-Protocol/Lobby](https://badges.gitter.im/Inter-Planetary-Sovereign-Identity-And-Trust-Protocol/Lobby.svg)](https://gitter.im/Inter-Planetary-Sovereign-Identity-And-Trust-Protocol/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![License](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


> This project was inspired by the [Mission Hack MTL](https://www.hackworks.com/en/missionhackMTL) challenge.

Selected as architects of New Earth, contributors of The Settlement Project, we develop and refine systems and technology to solve systemic problems for our new life. Today we lay the groundwork for ourselves, who are the first batch, and for an expanding society of future settlers.

We have scalable systems, built with connected technologies critical to ensure our human management system is suitable for New Earth. This is INFRASTRUCTURE.

To share resources, managed in new ways, we have tools that enable currency systems to be set up and governed in a NEW ECONOMY

Our prototype facilitates a HEALTHY COMMUNITY; it overcomes the circumstances that make an environment become sub-optimal.

To optimize our use of technology together with our HUMAN AMBITION, we enable lifecycle services for work, support, education and information. Lifecycle services
   - divide work among ourselves,
   - give safety to the needy,
   - optimize continuous learning,
   - manage information up and down the scale: from open to secret, from yours to ours.

In https://www.theguardian.com/news/2018/apr/05/demise-of-the-nation-state-rana-dasgupta we see a summary of national politics on Planet Earth over centuries, and the premise is "states centralized power in exchange for community services." We now enable people-power to operate services. Our challenge is to fill in the power vacuum with a social organization, as we all go to a new planet as early colonizers. The "Sovereign Identity and Attestation Network" protocol is the centralizing force keeping us together while it allows each of us to
   - own your personal data
   - choose how much to be collected
   - set your preferences who to trust for how much

Precedents for much of the foregoing exist wherever colonizers have previously entered and stayed.

The proposed challenge is to colonize a new planet. The planet we are going to has neither infrastructure nor governance. We are to architect and engineer it ourselves, free of legacy constraints.

In order to achieve our goal, we must define the base functions of our new underlying infrastructure. It will be a network, but what kind of network will it be?

```
Note that this project is only focused on the mechanics of the protocol and are not concerned with economics at all. The repo will provide examples of transactions happening, however, operational considerations like mining and gas are considered out of scope.
```

## Table of Contents
   * [Our Truths](#our-truths)
      * [Its Your Data](#its-your-data)
      * [Trust Is Personal](#trust-is-personal)
      * [Serverless](#serverless)
      * [Conclusion](#conclusion)
   * [Sovereign-Identity-Attestation-Network](#sovereign-identity-attestation-network)
      * [uPort](#uport)
      * [IPFS](#ipfs)
   * [Maintainers](#maintainers)
   * [Contribute](#contribute)
   * [License](#license)


## Our Truths
The following section details the three truths of the system design for our new internet. These truths are foundational and immutable. They will become the foundation on which we will be able to build an entirely open, and free internet for all. This internet will be built by the people and for the people. The three truths are:
  * You own your identity and data outright. All of it. Everything. You share what you want with who you want and how you want.
  * How you trust is up to you. How you are trusted is up to others.
  * Complete decentralization. The network is the computer. 


### Its Your Data
Back on Earth, the evolution of the network led to consolidation and hoarding information practices. Other people claim ownership and responsibility over your data. To be fair, the technology did not exist to have it any other way. They needed our data to do things. Useful things. Things we like and appreciate. Make tools we use that enrich our lives daily. And in order to do this, they needed the data. And in order to do that, they needed to store it.

But that was back on Earth. We don't have that problem do we? We can do what we like. So let's first agree, before moving forward, and without wasting yours and my valuable time on defending it, no one but you should own your data. It's yours.

The fact that you and you alone can own your data is our foundational truth for our new planet. This is the one truth we can build everything else on top of. Government, education, finance, trade, law, social, etc. will be built knowing that identity and data remain the immutable right of each and every individual. You and you alone will choose what you share and with whom you share.

### Trust Is Personal
In order to do business, trust must happen. It's fundamental in all commerce and social settings. You want to trust someone first. You also want to calibrate that trust. If I am buying candy, some trust is shared or required. They must trust my payment and I must trust that they will receive it. As a result, we need a way to proxy that trust. Today we use banks and credit card companies for this. But do we have to?

In the example of buying a bottle of wine, I may be asked for some ID. To do this I must show a government-issued document. 
However, by showing my driver's license, a simple 'token' attestation, a store clerk has seen my name, address, birth date, and whatever else is on my license. I did not want to share that. But what choice do I have?

Before describing how it can work, let's first agree that, in both examples, someone has been given the right to broker trust on behalf of the vendor and myself. This is important as, regardless of any network, a form of attestation will be required as I conduct business with you. It is the second foundational element of the protocol.

In the new system, a vendor will be able to send a request to have the government attest to your age. When the request is sent I will receive it and have the choice to approve or reject it. Note that the same thing is happening as before, the same need remains, however, the functional execution of that transaction is substantially different. The most important thing being that the vendor receives NO information on you. Nothing. Interestingly enough, the government has no data about you either. Remember it's your data always.

When you are born, the government will create a record, on the blockchain, that is yours and yours alone. It is certifiable evidence that you are who you say you are. The government, who created this evidence, has the capability, through zero-knowledge proofs, that you are indeed who you say you are without them having the data or even access to it.

With all that in mind, the transaction when buying my wine will be as follows:
  * Vendor requests governmental verification of my age
  * I accept the request
  * Access to the governments attestation and proof is granted
  * The trust protocol computes the zero-knowledge proof
  * Transaction is added to the blockchain
  * Boolean attestation is returned to the vendor
  * I get my wine

### Serverless
Our new network belongs to the people. It facilitates the social, governmental, governance, and commerce aspects of our lives. It ensures our data and identity sovereignty as well as providing a framework on which trust can be built. The final truth of our new internet is that it is serverless.

Today, many projects including [IPFS](https://ipfs.io/) protocols and tooling achieve a decentralized serverless possibility. This removes the need to have websites served up by a single endpoint on the internet. Instead, websites, and the services they provide, would exist without the need to manage and service a datacenter.

### Conclusion
By agreeing to the three truths above and cementing them as our driving principles, we are able to build an applicative architecture on top. Many of the tools we need to build our network exist today. uPort, Sovrin, and others for identity attestations and management. IPFS for globally distributable applications. For blockchains: Ethereum, IOTA, Hyperledger, Ark, and others. Additionally, tooling such as compose and the accord-project for business transactions, and contractual attestations.

Standards emerging, that will facilitate the growth and dispersion that this system requires, come from the [Verifiable Claims Working Group](https://www.w3.org/2017/vc/WG/).

On Earth, we see interest in the government and private sector in assessing and building these kinds of networks already, building on top of the ideas and principles of Sovereign Identity. Examples such as: [British Colombia Canada](http://www.timescolonist.com/business/b-c-experimenting-with-blockchain-to-store-and-share-crucial-data-1.23131666), and [Estonia eResidency](https://e-resident.gov.ee/) give hope to a more open and transparent network forming. Commercially, a [big announcement from IBM](https://www.forbes.com/sites/rogeraitken/2018/04/05/ibm-blockchain-joins-sovrins-decentralized-digital-identity-network-to-stem-fraud/#772f61a115ed) shows forward thinking and strong leadership through its partnership with the amazing team found at [Sovrin](https://sovrin.org/) who have pioneered awareness and adoption of sovereign identity.

## Sovereign-Identity-Attestation-Network
Sovereign-Identity-Attestation-Network, SIAN, is the components, frameworks, and platforms that we build and build upon. SIAN is the implementation of our principles in order to create free, open, and usable software that we all benefit from. The software itself is considered to be the 'glue' that enables the wiring up of everything. End users will be provided with implementations for basic use cases on the new internet, while developers will be able to do what they do. The design of SIAN will ensure the ability to be 100% agnostic regardless of networks, tooling, or use case. Other sovereign identity networks will be encouraged to provide integration components that further encourage the decentralization away from any one thing including SIAN.

What follows are the various components and an outline of needs and use cases they address.

### uPort
Provides the user to manage their identity and then physically store them on the Ethereum blockchain accessible through a public id. uPort provides this framework with a quick jump off as it has a great api and accommodates the zero-knowledge proofs we will be reliant upon. Of note, since uPort keeps your identity on Ethereum, you will be free to to choose other 'trust providers' in place of uPort. Just point them to your wallet on Ethereum, et voilà. uPort has been selected as the main focus for now as it adheres directly to all 3 truths of our network.

### IPFS
Provides us with an Inter Planetary file system for our inter planetary sovereign identity and trust protocol. IPFS provides us with a place to store our websites and data while ensuring distribution throughout the network.

## Maintainers

[@realrhys](https://github.com/realrhys)

## Contribute

PRs accepted.

If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 RelateID
