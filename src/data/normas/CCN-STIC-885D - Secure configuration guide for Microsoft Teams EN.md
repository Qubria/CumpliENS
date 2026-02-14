---
**Author:** CCN
**CreationDate:** D:20200923160225+02'00'
**ModDate:** D:20200923160225+02'00'
---

<!-- Página 1 de 49 -->

ICT Security Guide
CCN-STIC 885D
Secure Configuration Guide for Microsoft Teams
JANUARY 2020

![Imagen 1 - Página 1](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina1_img1.png)

![Imagen 2 - Página 1](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina1_img2.png)

![Imagen 3 - Página 1](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina1_img3.jpeg)

![Imagen 4 - Página 1](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina1_img4.png)

---

<!-- Página 2 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Edit:
 National Cryptologic Centre, 2020
NIPO: 083-20-197-6
Date of Edition: january 2020
Plain Concepts has participated in the creation and modification of this document and its annexes.
Sidertia Solutions S.L. has participated in the revision of this guide.
LIMITATION OF RESPONSIBILITY
This document is provided in accordance with the terms compiled in it, expressly rejecting any type of
implicit guarantee that might be related to it. In no case can the National Cryptologic Centre be
considered liable for direct, indirect, accidental or extraordinary damage derived from using information
and software that are indicated even when warning is provided concerning this damage.
LEGAL NOTICE
Without written authorisation from the National Cryptologic Centre, it is strictly forbidden, incurring
penalties set by law, to partially or totally reproduce this document by any means or procedure,
including photocopying and computer processing, or distribute copies of it by means of rental or public
lending.
National Cry ptologic Centre 2

![Imagen 1 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img2.png)

![Imagen 3 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img3.png)

![Imagen 4 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img4.png)

![Imagen 5 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img5.png)

![Imagen 6 - Página 2](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina2_img6.jpeg)

---

<!-- Página 3 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
FOREWORD
The current national and international scenario is dominated by developments in
Information and Communication Technologies (ICT) and by risks emerging from their
use. The Administration is fully aware of this scenario and it is necessary for this body
to develop, acquire, conserve and secure use of ICTs to guarantee that its services
run effectively for the citizen's and the country's best interests.
Working from the Centre's knowledge and experience on threats and vulnerabilities
th
in terms of emerging risks, Law 11/2002, dated 6 May, regulating the National
Intelligence Centre, entrusts the National Intelligence Centre the functions related to
information technology security, according to the Article 4.e), and to the protection
of classified information, according to the Article 4.f). It also gives, through the Article
9.2.f), its Secretary of State-Director the responsibility of managing the National
Cryptologic Centre.
One of the most outstanding functions that it assigns to it, in Royal Decree 421/2004,
th
dated 12 March, regulating the National Cryptologic Centre is to draw up and
disseminate standards, instructions, guides and recommendations to guarantee
security for the Administration's information and communication technologies.
th
Royal Decree 3/2010, dated 8 January, develops the National Security Framework
(hereinafter called ENS) in the field of Electronic Administration which is also referred
st
in the second section of Article 156 of Law 40/2015, dated 1 October, of the Public
Sector Legal System. The National Security Framework establishes the security policy,
in matters of use of electronic means, which ensures the protection of information.
th
Indeed, Royal Decree 3/2010, dated 8 January, updated by Royal Decree 951/2015,
rd
dated 23 October, sets the basic principles and minimum requirements as well as
any protection measures to be introduced in Administration systems. In article 29, it
authorises the CCN to develop CIS guidelines to ease the fulfilment of these minimum
requirements.
The CCN-STIC documents series was drawn up to comply with this function and the
ENS, aware of the importance of establishing a frame of reference on this matter that
can be used as support so that Administration staff can carry out their difficult and
occasionally thankless task of providing security for ICT systems within their
responsibility.
July 2019
Felix Sanz Roldan
Secretary of State
Director of the National Cryptologic Centre
National Cry ptologic Centre 3

![Imagen 1 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img2.png)

![Imagen 3 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img3.png)

![Imagen 4 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img4.png)

![Imagen 5 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img5.png)

![Imagen 6 - Página 3](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina3_img6.png)

---

<!-- Página 4 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
INDEX
1. MICROSOFT TEAMS ............................................................................................... 6
1.1 DESCRIPTION OF THE USE OF THIS GUIDE ............................................................... 6
1.2 SERVICE DEFINITION ................................................................................................ 6
1.3 PREREQUISITES FOR DEPLOYMENT USING POWERSHELL ....................................... 7
2. MICROSOFT TEAMS DEPLOYMENT ......................................................................... 8
2.1 ADMINISTRATOR - INITIAL CONFIGURATION ........................................................... 8
2.2 END USER - FIRST STEPS ......................................................................................... 13
3. MICROSOFT TEAMS CONFIGURATION .................................................................. 20
3.1 OPERATIONAL FRAMEWORK ................................................................................. 21
3.1.1 ACCESS CONTROL .............................................................................................. 21
3.1.1.1 IDENTIFICATION ............................................................................................ 21
3.1.1.2 ENTRY REQUIREMENTS ................................................................................ 21
3.1.1.3 SEGREGATION OF FUNCTIONS AND TASKS .................................................. 22
3.1.1.4 ACCESS RIGHTS MANAGEMENT PROCESS .................................................... 23
3.1.1.5 AUTHENTICATION MECHANISMS ................................................................. 26
3.1.1.6 LOCAL ACCESS ............................................................................................... 26
3.1.1.7 REMOTE ACCESS ........................................................................................... 26
3.1.2 EXPLOITATION ................................................................................................... 26
3.1.2.1 ... PROTECTION AGAINST MALWARE ............................................................... 26
3.1.2.2 ... ACTIVITY LOG ................................................................................................ 27
3.1.2.3 ... INCIDENT MANAGEMENT ............................................................................. 28
3.2 PROTECTION MEASURES ........................................................................................ 28
3.2.1 PROTECTION OF COMMUNICATIONS ............................................................... 28
3.2.2 SYSTEM MONITORING ....................................................................................... 28
3.2.3 PROTECTION OF INFORMATION ....................................................................... 28
3.2.3.1 RATING OF INFORMATION ........................................................................... 28
3.2.3.2 ENCRYPTION ................................................................................................. 29
3.2.3.3 CLEANING OF DOCUMENTS .......................................................................... 29
3.2.3.4 BACKUP COPIES ............................................................................................ 29
3.2.4 PROTECTION OF SERVICES ................................................................................ 31
3.2.4.1 PROTECTION AGAINST DENIAL OF SERVICE ................................................. 31
National Cry ptologic Centre 4

![Imagen 1 - Página 4](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina4_img1.png)

![Imagen 2 - Página 4](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina4_img2.png)

![Imagen 3 - Página 4](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina4_img3.png)

![Imagen 4 - Página 4](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina4_img4.png)

![Imagen 5 - Página 4](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina4_img5.png)

---

<!-- Página 5 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
4. OTHER SECURITY CONCERNS................................................................................ 31
4.1 EQUIPMENT POLICY ............................................................................................... 31
4.2 MESSAGING POLICIES ............................................................................................ 32
4.3 APPLICATION PERMISSION POLICIES ..................................................................... 33
4.4 APPLICATION CONFIGURATION POLICIES .............................................................. 34
4.5 VOICE POLICIES ...................................................................................................... 35
4.6 MEETING POLICIES ................................................................................................. 36
4.7 DEVICE POLICIES ..................................................................................................... 36
5. SUMMARY TABLE OF SECURITY MEASURES ......................................................... 38
National Cry ptologic Centre 5

![Imagen 1 - Página 5](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina5_img1.png)

![Imagen 2 - Página 5](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina5_img2.png)

![Imagen 3 - Página 5](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina5_img3.png)

![Imagen 4 - Página 5](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina5_img4.png)

![Imagen 5 - Página 5](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina5_img5.png)

---

<!-- Página 6 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
1. MICROSOFT TEAMS
1.1 Description of the use of this guide
The purpose of this guide is to indicate the steps to be followed for the configuration
of the Microsoft Teams service in compliance with the necessary requirements of the
National Security Framework in its HIGH category.
This guide should be used in conjunction with [CCN-STIC-885A - Secure Configuration
Guide for Office 365], which describes generalities of Office 365 and features common
to all services, as well as a glossary of security terms and abbreviations used in these
guides.
The following sources have been consulted for the preparation of this guide:
- Official Microsoft documentation.
- CCN-STIC-823 Cloud Services.
- CCN-STIC-884A - Secure Configuration Guide for Azure.
- CCN-STIC-885A - Secure Configuration Guide for Office 365.
- ENS Royal Decree BOE-A-2010-1330.
1.2 Service definition
Microsoft Teams is an Office 365 chat-based workspace designed to improve the
communication and collaboration among business teams by enhancing the
collaborative capabilities of the Office 365 cloud platform (a set of cloud-based
applications and services hosted on servers owned by Microsoft and available from
Internet-connected devices). It should also be noted that Office 365 executes on
Microsoft Azure.
Microsoft Teams offers the possibility of using Office 365 applications, customizing the
environment according to the needs of your computer. With Teams, users can:
 Conduct group or private chats to have group conversations with a few
members.
 View content and chat history at any time.
 Start video or voice meetings by integrating Skype into your business.
 Get instant access to all the content, the collaboration tools, the users and the
conversations through tabs.
 Add quick access to frequently used documents, websites, and applications
 Access to notes and documents thanks to the integration with OneNote and
SharePoint.
 Work with Office Online documents directly from Teams.
 Planning tasks thanks to the integration with Planner.
 Adding Power BI reports.
 Enjoy a common workspace with a web and mobile devices interface.
National Cry ptologic Centre 6

![Imagen 1 - Página 6](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina6_img1.png)

![Imagen 2 - Página 6](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina6_img2.png)

![Imagen 3 - Página 6](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina6_img3.png)

![Imagen 4 - Página 6](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina6_img4.png)

![Imagen 5 - Página 6](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina6_img5.png)

---

<!-- Página 7 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
 Being group-based allows the user to move easily from one collaboration
platform to another.
 Add connectors that allow to integrate applications such as Yammer and third-
party services, such as RSS, Bing News Channel or Twitter.
 Create custom integration with application programming interfaces and other
development tools.
1.3 Prerequisites for deployment using PowerShell
Office 365 PowerShell allows to manage and configure Microsoft Teams from the
command line, with one user having management rights. See the guide [CCN-STIC-
885A - Secure Configuration Guide for Office 365].
The commands for managing Teams are in two different modules:
 Microsoft Teams PowerShell module - contains the necessary cmdlets to
create and manage teams.
To install it, open a version of PS in administrator mode:
 Install-Module -Name MicrosoftTeams
 Install-Module -name MicrosoftTeams -AllowClobber
 Skype for Business PowerShell Module - contains the cmdlets to manage
policies, settings and other Teams tools.
1. Locate the module in Microsoft's "Download Center":
https://www.microsoft.com/en-us/download/details.aspx?id=39366
2. Download the file "SkypeOnlinePowerShell.exe" and execute.
To connect to the Microsoft Teams module:
 Connect-MicrosoftTeams
To consult the teams created:
National Cry ptologic Centre 7

![Imagen 1 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img1.png)

![Imagen 2 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img2.png)

![Imagen 3 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img3.png)

![Imagen 4 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img4.png)

![Imagen 5 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img5.png)

![Imagen 6 - Página 7](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina7_img6.png)

---

<!-- Página 8 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
 get-team
2. MICROSOFT TEAMS DEPLOYMENT
Microsoft Teams does not require prior installation in the client's on-premise
environment, as it is an online service accessible from the Internet and hosted in the
organization's Office 365 tenant. It uses the "Public Cloud" infrastructure referred to in
the [823-Cloud Computing] guide.
Microsoft Teams, as well as the Office 365 suite, is included in the SaaS (Software as a
Service) category. The CSP (Microsoft) is in charge of offering the client the software as
a service.
2.1 Administrator - initial configuration
The administrator user can access the Microsoft Teams administration portal through
the Office 365 administration portal (portal.office365.com).
Clicking on the Teams icon takes you to the Microsoft Teams Administration Center.
National Cry ptologic Centre 8

| Microsoft Teams does not require prior installation in the client's on-premise |
| --- |
| environment, as it is an online service accessible from the Internet and hosted in the |
| organization's Office 365 tenant. It uses the "Public Cloud" infrastructure referred to in |
| the [823-Cloud Computing] guide. |


| Microsoft Teams, as well as the Office 365 suite, is included in the SaaS (Software as a |
| --- |
| Service) category. The CSP (Microsoft) is in charge of offering the client the software as |
| a service. |


| The administrator user can access the Microsoft Teams administration portal through |
| --- |
| the Office 365 administration portal (portal.office365.com). |


![Imagen 1 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img1.png)

![Imagen 2 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img2.png)

![Imagen 3 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img3.png)

![Imagen 4 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img4.png)

![Imagen 5 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img5.png)

![Imagen 6 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img6.png)

![Imagen 7 - Página 8](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina8_img7.png)

---

<!-- Página 9 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The [Organization-wide Settings] menu controls the user settings for the entire
organization. The most relevant ones from the security point of view are described
below.
External access
External access allows Teams and Skype Business users to communicate with users
outside the organization or domain. The [Organization-Wide Settings] menu
External access is used when:
 There are users in different domains of the organization.
 People in the organization are required to use Teams to contact people of
specific companies outside the organization.
1. In the previous screen, click on "+ Add a domain" to add allowed or blocked
domains.
By default, the organization can communicate
with all the external domains. If blocked domains
are added, all other domains are allowed.
However, if you add allowed domains, all other
domains will be blocked.
2. Add domains to the list of blocked or
allowed.
2.1. Write down the domain name.
2.2. Select the action.
National Cry ptologic Centre 9

![Imagen 1 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img1.png)

![Imagen 2 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img2.png)

![Imagen 3 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img3.png)

![Imagen 4 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img4.png)

![Imagen 5 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img5.png)

![Imagen 6 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img6.png)

![Imagen 7 - Página 9](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina9_img7.png)

---

<!-- Página 10 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
2.3. Press "Ready".
This is how the domains are added individually.
It is important to restrict external domains, from a security point of view, to prevent
users from other organizations from contacting members of our organization.
With this configuration, the user access to other organizations will also be controlled.
The ability to communicate with users from other organizations is a key element in
Teams, therefore, it is recommended to maintain a list of authorized or blocked
domains, and to properly maintain this list over time.
Guest access
Guest access allows people outside the organization to be granted access to teams and
channels in one or more business spaces. Any contact who has an email account (such
as Outlook or Gmail or others) can participate as a guest in Teams with full access to
chats, meetings and team files.
You can access it through the menu [Organization-wide settings\Guest access].
Guest access is disabled by default, and it is recommended to not activate it unless
necessary.
All Teams' guests are protected with the same regulatory compliance and auditing as
the rest of Office 365, and can be managed securely within Azure AD.
Differences between guest access and external access
 Guest access grants access permission to one person. External access grants access
permission to a whole domain.
 Guest access, once granted by a team owner, allows a guest to access resources,
such as files and channel discussions, for a specific computer and to chat with
other users of the team to which they have been invited.
 With external access (federated chat), external chat participants do not have
access to the organization's teams or team resources. They can only participate in a
federated chat (one-on-one).
National Cry ptologic Centre 10

![Imagen 1 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img1.png)

![Imagen 2 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img2.png)

![Imagen 3 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img3.png)

![Imagen 4 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img4.png)

![Imagen 5 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img5.png)

![Imagen 6 - Página 10](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina10_img6.png)

---

<!-- Página 11 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
 Tenant managers can choose between the two communication options depending
on the level of collaboration that is desirable with the external part. Administrators
can choose between two approaches or both, depending on the needs of the
organization.
The following table shows a comparison of the characteristics of both:
Feature Users of Users of guest
external acces
access
User Yes Yes
User Yes Yes
1
The user Yes Yes
User tenants Yes2Yes2 NoNo
User filesUser NoNo YesYes
The user TeamsUser NoNo YesYes
You can Add a user to a group chatUser NoNo YesYes
A user YesYes YesYes
Se pueden agregar usuarios adicionales a un chat con un No3No3 N/DN/A
usuario externo
Presence YesYes YesYes
An out of NoNo YesYes
Individual NoNo NoNo
@mentions NoNo YesYes
Making private callsMake YesYes YesYes
Allow IPAllow YesYes YesYes
Screen NoNo YesYes
Allow " nowAllow NoNo YesYes
Edit messagesEdit NoNo YesYes
You can messagesCan NoNo YesYes
1 provided that the user has been added as a guest and has logged in as a guest for the
guest tenant
National Cry ptologic Centre 11

| Feature | Users of <br> external <br> access | Users of guest <br> acces |
| --- | --- | --- |
| User | Yes | Yes |
| User | Yes | Yes |
| The user | Yes | Yes1 |
| User tenants | Yes2Yes2 | NoNo |
| User filesUser | NoNo | YesYes |
| The user TeamsUser | NoNo | YesYes |
| You can Add a user to a group chatUser | NoNo | YesYes |
| A user | YesYes | YesYes |
| Se pueden agregar usuarios adicionales a un chat con un <br> usuario externo | No3No3 | N/DN/A |
| Presence | YesYes | YesYes |
| An out of | NoNo | YesYes |
| Individual | NoNo | NoNo |
| @mentions | NoNo | YesYes |
| Making private callsMake | YesYes | YesYes |
| Allow IPAllow | YesYes | YesYes |
| Screen | NoNo | YesYes |
| Allow " nowAllow | NoNo | YesYes |
| Edit messagesEdit | NoNo | YesYes |
| You can messagesCan | NoNo | YesYes |


![Imagen 1 - Página 11](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina11_img1.png)

![Imagen 2 - Página 11](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina11_img2.png)

![Imagen 3 - Página 11](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina11_img3.png)

![Imagen 4 - Página 11](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina11_img4.png)

![Imagen 5 - Página 11](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina11_img5.png)

---

<!-- Página 12 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
2 only by email or login protocol address (SIP).
3 external (federated) chat is 1:1 only.
Organization-wide Settings
From the [Organization-Wide Settings\Microsoft Teams Settings] menu, you can
control what features are available to users in your organization, including
notifications and sources, e-mail integration, cloud storage options, and devices.
E-mail Integration
Enable this feature so that users can send an email to a channel on Microsoft Teams
using the channel's email address.
Archives
Here you can enable or disable file sharing and cloud storage options.
National Cry ptologic Centre 12

![Imagen 1 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img1.png)

![Imagen 2 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img2.png)

![Imagen 3 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img3.png)

![Imagen 4 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img4.png)

![Imagen 5 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img5.png)

![Imagen 6 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img6.png)

![Imagen 7 - Página 12](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina12_img7.png)

---

<!-- Página 13 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Users can upload and share files from cloud storage services on Teams' channels and
chats. Cloud storage options on Microsoft Teams currently include ShareFile, Dropbox,
Box and Google Drive. Enable the switch of cloud storage providers that the
organization wants to use.
Note: It is recommended to enable only those cloud storage services that have been approved
and controlled by the organization. Otherwise, there is a risk of storing sensitive information
with external providers not controlled by the organization's policies.
2.2 End user - first steps
The end user can access the Office 365 portal through the url: portal.office365.com or
www.office.com. After entering the credentials, a panel with all the applications to
which you have access is displayed.
Click on the Teams icon to access the Microsoft Teams’ portal
(https://teams.microsoft.com).
National Cry ptologic Centre 13

| The end user can access the Office 365 portal through the url: portal.office365.com or |
| --- |
| www.office.com. After entering the credentials, a panel with all the applications to |
| which you have access is displayed. |


![Imagen 1 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img2.png)

![Imagen 3 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img3.png)

![Imagen 4 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img4.png)

![Imagen 5 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img5.png)

![Imagen 6 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img6.png)

![Imagen 7 - Página 13](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina13_img7.png)

---

<!-- Página 14 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The different options presented in the user menu are:
Activity: comments and responses made by each team member on a
topic. To show only the user's own replies, select the option "My
activity".
Chat: to establish new conversations with any member of the
organization or to resume conversations.
Teams: channel list, which are sections that can be created within a
team. Channels can be organized by topic, department or project.
Calendar: all the user's planned meetings and commitments By clicking
on it you will be able to see your complete agenda.
Calls - displays speed dialing, contact list and call/voicemail history
options.
Files: views of the files accessed by the user or any of the team members
you work with.
Applications: access to the different applications integrated in Teams.
Creating a team
Teams are collections of people, content and tools around various projects and tasks
within an organization.
National Cry ptologic Centre 14

![Imagen 1 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img1.png)

![Imagen 2 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img2.jpeg)

![Imagen 3 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img3.png)

![Imagen 4 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img4.png)

![Imagen 5 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img5.png)

![Imagen 6 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img6.png)

![Imagen 7 - Página 14](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina14_img7.png)

---

<!-- Página 15 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
 Teams can be created to be private, for guest users only.
 Teams can also be created as public and open, so that all members of the
organization can join (up to 5,000 members).
A Team can also be created from scratch, or from an existing group in Office 365.
Click on the "Create Team" button, and choose whether to create the team from
scratch, or from an existing group in Office 365.
Creating a team from scratch
When you create a team, this is what you create:
 A new group of Office 365.
 A SharePoint Online site and document library to store the computer files.
 A shared Exchange Online mailbox and calendar.
 A OneNote notebook.
 Relationships with other O365 applications, such as Planner and Power BI.
1. Press the button "Generate a device from scratch".
2. Choose whether it is public or private.
National Cry ptologic Centre 15

![Imagen 1 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img1.jpeg)

![Imagen 2 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img2.png)

![Imagen 3 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img3.png)

![Imagen 4 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img4.png)

![Imagen 5 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img5.png)

![Imagen 6 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img6.png)

![Imagen 7 - Página 15](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina15_img7.png)

---

<!-- Página 16 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The actions for creating a private team are described below, i.e. people on the
team will need a code to join.
3. Assign a name to the team and press the "Create" button.
If you press the "Create"
button, the team will be
created in Teams and you will
go to the next step.
4. Adding members to the team.
5. Check the team’s configuration and perform further operations if necessary.
In the example, the unit "CCN-Team1" and an associated channel "General"
(default) have been created.
Clicking on the "More options" menu of the team displays multiple options:
National Cry ptologic Centre 16

![Imagen 1 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img1.png)

![Imagen 2 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img2.png)

![Imagen 3 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img3.png)

![Imagen 4 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img4.png)

![Imagen 5 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img5.png)

![Imagen 6 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img6.png)

![Imagen 7 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img7.png)

![Imagen 8 - Página 16](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina16_img8.png)

---

<!-- Página 17 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The "Manage Team" option, which is the most interesting option from a security
point of view, is described below.
Create a team from an existing group in Office 365
When a team is created from an existing group, the group membership, site, mailbox,
and notepad are displayed in Teams.
1. From the left side menu of Teams, "Teams", "Create Team" button.
2. Press the "Create from..." button.
3. Choose the previous element to create the team: team of teams or Office 365
group.
In this example choose "Office 365 Group".
National Cry ptologic Centre 17

![Imagen 1 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img1.jpeg)

![Imagen 2 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img2.png)

![Imagen 3 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img3.png)

![Imagen 4 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img4.png)

![Imagen 5 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img5.png)

![Imagen 6 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img6.png)

![Imagen 7 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img7.png)

![Imagen 8 - Página 17](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina17_img8.png)

---

<!-- Página 18 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
4. Choose the Office 365 group to use.
In this example, choose the group created from Sharepoint "CCN-O365-group1".
See information on creating Sharepoint groups in the guide [CCN-STIC-885B -
Secure Configuration Guide for Sharepoint Online].
5. Check team settings and perform further operations if necessary.
Manage Teams
1. Select the team from the team drop-down list and press the "More options"
button.
National Cry ptologic Centre 18

![Imagen 1 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img1.png)

![Imagen 2 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img2.jpeg)

![Imagen 3 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img3.jpeg)

![Imagen 4 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img4.png)

![Imagen 5 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img5.png)

![Imagen 6 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img6.png)

![Imagen 7 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img7.png)

![Imagen 8 - Página 18](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina18_img8.png)

---

<!-- Página 19 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
2. Select the item "Manage team".
A screen with several tabs is displayed:
The [Members] tab shows all the team members and their corresponding roles.
The team owner can change the role of each member from the drop-down list in
the role column.
The [Settings] tab shows different options, the most important from a security
point of view are:
- Member permissions: allow the creation of channels, add applications and
more.
- Guest permissions: allow guests to take action on channels.
- Team code: code to share and to be able to join the team directly (no
application needed to join).
National Cry ptologic Centre 19

![Imagen 1 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img2.png)

![Imagen 3 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img3.png)

![Imagen 4 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img4.png)

![Imagen 5 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img5.png)

![Imagen 6 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img6.png)

![Imagen 7 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img7.png)

![Imagen 8 - Página 19](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina19_img8.png)

---

<!-- Página 20 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The permissions on members and guests are:
To see how to manage permissions on the team and associated channels, see
section [3.1.1.2 Access requirements].
3. MICROSOFT TEAMS CONFIGURATION
The configuration of the Microsoft Teams service will then be addressed, focusing on
complying with the requirements of the National Security Framework that apply
exclusively to this service.
National Cry ptologic Centre 20

![Imagen 1 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img1.png)

![Imagen 2 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img2.png)

![Imagen 3 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img3.png)

![Imagen 4 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img4.png)

![Imagen 5 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img5.png)

![Imagen 6 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img6.png)

![Imagen 7 - Página 20](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina20_img7.png)

---

<!-- Página 21 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
3.1 Operational Framework
3.1.1 Access Control
3.1.1.1 Identification
Microsoft Teams Identity Management is common to all Office 365 applications and is
described in the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365].
3.1.1.2 Entry requirements
This section discusses the existing permission levels on a team and a channel, and how
access rights are granted to different members.
Owners and members
In Microsoft Teams there are two levels of user permissions: owner and member. By
default, a user who creates a new computer is granted the owner status. In addition,
owners and members can have moderating capabilities for a channel (provided that
moderation has been set up). If a team is created from an existing Office 365 group,
permissions are inherited.
The table below shows the difference between an owner and a member:
Team Owner Group
member
Create a team Yes1 No
Leave the team Yes Yes
Edit the name or description of the team No No
Remove team No No
Add channel Yes Yes2
Edit name or description of the channel Yes Yes2
Delete channel Yes Yes2
Add members Yes3 No 4
Application to add members N/A Yes5
Adding files Yes Yes2
Adding connectors Yes Yes2
Adding bots Yes Yes2
National Cry ptologic Centre 21

|  | Team Owner | Group <br> member |
| --- | --- | --- |
| Create a team | Yes1 | No |
| Leave the team | Yes | Yes |
| Edit the name or description of the team | No | No |
| Remove team | No | No |
| Add channel | Yes | Yes2 |
| Edit name or description of the channel | Yes | Yes2 |
| Delete channel | Yes | Yes2 |
| Add members | Yes3 | No 4 |
| Application to add members | N/A | Yes5 |
| Adding files | Yes | Yes2 |
| Adding connectors | Yes | Yes2 |
| Adding bots | Yes | Yes2 |


![Imagen 1 - Página 21](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina21_img1.png)

![Imagen 2 - Página 21](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina21_img2.png)

![Imagen 3 - Página 21](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina21_img3.png)

![Imagen 4 - Página 21](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina21_img4.png)

![Imagen 5 - Página 21](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina21_img5.png)

---

<!-- Página 22 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
1 Team owners can create teams unless they don’t have permission to do so.
2 An owner can disable these items at the team level, in which case the members
would not have access to them.
3 After adding a member to a team, an owner can also promote a member to owner
status. The owner can also downgrade his or her own status to member.
4 Team members can add other members to a public team.
5 Although a team member cannot directly add members to a private team, he or she
can request to add a person to a team of which he or she is already a member. When a
member requests to add a person to a team, team owners are alerted that they have a
pending request that they can accept or deny.
Owners can turn other team members into owners, as described in section [2.2. End
user – first steps]. A team can have up to 100 owners. It is recommended to have at
least two owners to avoid having orphaned groups if one owner leaves the team.
3.1.1.3 Segregation of functions and tasks
Microsoft Teams has several management roles focused on managing different parts
and elements of the service:
 Teams Service Administrator is responsible for managing the Microsoft Teams
service, as well as managing and creating Office 365 Groups.
 Teams Communications Administrator manages the calling and meeting
features within the Microsoft Teams service.
 Teams Communications Support Engineer is in charge of troubleshooting
communications problems in Teams using advanced tools.
 Teams communications technical support specialist is responsible for
troubleshooting communications problems in Teams using basic tools.
The generic role of Teams Manager can be assigned from the Microsoft
Administration Center 365. To assign the specific roles described above, you must
National Cry ptologic Centre 22

![Imagen 1 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img1.png)

![Imagen 2 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img2.png)

![Imagen 3 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img3.png)

![Imagen 4 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img4.png)

![Imagen 5 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img5.png)

![Imagen 6 - Página 22](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina22_img6.png)

---

<!-- Página 23 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
use Azure AD. Refer to the guide [CCN-STIC-884A - Secure Configuration Guide for
Azure].
3.1.1.4 Access rights management process
This section describes how an owner can assign permissions to other members over
the team itself or associated channels.
Administrating Teams by an Owner
1. Select the team from the team drop-down list and press the "More options"
button.
2. Select the item "Manage team".
A screen with several tabs is displayed:
The [Members] tab shows all the team members and their corresponding role. The
team owner can change the role of each member from the drop-down list in the
role column.
National Cry ptologic Centre 23

![Imagen 1 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img1.jpeg)

![Imagen 2 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img2.png)

![Imagen 3 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img3.png)

![Imagen 4 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img4.png)

![Imagen 5 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img5.png)

![Imagen 6 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img6.png)

![Imagen 7 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img7.png)

![Imagen 8 - Página 23](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina23_img8.png)

---

<!-- Página 24 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The [Settings] tab contains various options, the most important from the security
point of view are:
- Member permissions: allow the creation of channels, add applications and
more.
- Guest permissions: allow guests to take action on channels.
- Team code: code to share and to be able to join the team directly (no
application needed to join).
The permissions on members and guests are:
National Cry ptologic Centre 24

![Imagen 1 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img2.png)

![Imagen 3 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img3.png)

![Imagen 4 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img4.png)

![Imagen 5 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img5.png)

![Imagen 6 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img6.png)

![Imagen 7 - Página 24](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina24_img7.png)

---

<!-- Página 25 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Assigning permissions in the configuration of a channel by an owner
In addition to other functions, team owners and members may have moderating
capabilities for a channel (provided moderation is enabled for a team). Moderators
can initiate new posts in a channel and control whether team members can respond to
existing channel messages. They can also control whether bots and connectors can
send channel messages.
To manage channel moderation (by a team owner):
1. In Teams, select a channel from a team and click on the "More options" icon.
2. Click on "Manage Channel" in the drop-down menu.
3. Manage the permits.
National Cry ptologic Centre 25

![Imagen 1 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img1.jpeg)

![Imagen 2 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img2.png)

![Imagen 3 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img3.png)

![Imagen 4 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img4.png)

![Imagen 5 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img5.png)

![Imagen 6 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img6.png)

![Imagen 7 - Página 25](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina25_img7.png)

---

<!-- Página 26 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
3.1.1.5 Authentication mechanisms
Information about password policies, MFA authentication and other authentication
issues is shown in the guide [CCN-STIC-885A - Secure Configuration Guide for Office
365].
Microsoft Teams uses modern authentication to make the sign-in experience simple
and secure. Modern authentication is a process that lets computers know that users
have already typed in their credentials (such as work email and password) elsewhere
and do not need to retype them to start the application.
3.1.1.6 Local access
It is understood as local access to the access from the corporate network or authorized
locations.
It requires the establishment of a "multi-factor authentication" (MFA) and an
appropriate credential management policy, which are described in section [3.1.1.5
Authentication mechanisms]. A record of successful and unsuccessful system access
attempts is also required, as described in section [3.1.2.2 Activity Log]. Additionally,
access to Office 365 can be controlled by conditional access policies or rules in ADFS,
as described in the [CCN-STIC-884A - Secure Configuration Guide for Azure] guide.
3.1.1.7 Remote Access
Remote access is understood as access from the Internet (any IP). It is recommended
to reinforce security when accessed from the Internet (only managed computers, MFA,
device compliance, etc.). Everything can be managed from the Azure AD’s portal. See
guide [CCN-STIC-884A - Secure Configuration Guide for Azure].
It should be noted at this point that Office 365 is a cloud solution accessible by the end
user through the Internet. Data encryption will be applied as described in section
[3.2.3.2 Encryption] of the [CCN-STIC-885A - Secure Configuration Guide for Office 365]
guide.
3.1.2 Exploitation
Microsoft Teams will always be updated. That is, the service is permanently
maintained by Microsoft, taking care of updates and patches, as well as establishing
the mechanisms for detection and protection against threats, complying with the
National Security Framework in its High category.
3.1.2.1 Protection against malware
If your organization has Office 365 Advanced Threat Protection (Office 365 ATP), you
will have a real-time discovery browser, accessible from the Office 365 Security and
Compliance Center. See the guide [CCN-STIC-885A - Secure Configuration Guide for
Office 365].
National Cry ptologic Centre 26

![Imagen 1 - Página 26](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina26_img1.png)

![Imagen 2 - Página 26](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina26_img2.png)

![Imagen 3 - Página 26](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina26_img3.png)

![Imagen 4 - Página 26](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina26_img4.png)

![Imagen 5 - Página 26](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina26_img5.png)

---

<!-- Página 27 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Note that when a file in SharePoint Online, OneDrive For Business, or Microsoft Teams
is identified as malicious, ATP blocks the file.
The image shows an example of a
malicious file detected in a library. You
can see that the file is there, but it is
blocked and shows a warning icon next
to it.
The most secure option is to delete the
file.
3.1.2.2 Activity log
To configure activity log of the Teams service, you will need to make use of the Audit
functionality available through the Office 365 Security and Compliance Center. More
information in the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365].
Also mention that there are many activities related to Teams in the audit log,
accessible from the Office 365 Security and Compliance Center menu [Search/Audit
Logs]:
As an example of such consultations:
National Cry ptologic Centre 27

![Imagen 1 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img1.png)

![Imagen 2 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img2.png)

![Imagen 3 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img3.jpeg)

![Imagen 4 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img4.png)

![Imagen 5 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img5.png)

![Imagen 6 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img6.png)

![Imagen 7 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img7.png)

![Imagen 8 - Página 27](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina27_img8.png)

---

<!-- Página 28 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
3.1.2.3 Incident Management
See section [3.1.2.1 Protection against malicious code] of the [CCN-STIC-885A - Secure
Configuration Guide for Office 365] guide for how to access "Threat Management"
reports.
3.2 Protection measures
3.2.1 Protection of communications
In terms of communications protection, it should be noted that the cryptographic
protocols for TLS connections, which are automatically integrated into Office 365, are
used. This is true when:
 Users work with files stored in OneDrive For Business or SharePoint Online.
 Users share files in online meetings and instant messaging conversations.
In fact, all Office 365 communications are encrypted: Mail Clients (POP, IMAP, SMTP-
TLS), Outlook Clients (MAPI-HTTPS), Browsers (Web HTTPS), Mobile Devices
(ActiveSync HTTPS), Teams and Skype (SIP-TLS). No additional configuration is
required, but it is important to note that as of June 2020, TLS 1.0 and 1.1 support will
be removed. This has direct implications for customers.
https://docs.microsoft.com/en-us/office365/troubleshoot/security/prepare-tls-1.2-in-office-365
3.2.2 System monitoring
Refer to the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365] for the
various service monitoring mechanisms, and section [3.1.2.2 Activity Log] of this guide.
3.2.3 Protection of information
3.2.3.1 Rating of information
Office 365 has several mechanisms for qualifying information, as explained in section
[3.2.3.1 Qualifying Information] of the [CCN-STIC-885A - Secure Configuration Guide
for Office 365] guide.
Regarding retention labels for Teams, from the Security and Compliance Center in
Office 365 it is possible to establish as locations in retention policies, both "Teams'
Channel Messages" and "Teams' Chats". That is, you can act proactively in deciding
whether to retain and/or remove content based on the length of time, both in
conversations, chats and channel messages.
National Cry ptologic Centre 28

![Imagen 1 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img1.png)

![Imagen 2 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img2.png)

![Imagen 3 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img3.png)

![Imagen 4 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img4.png)

![Imagen 5 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img5.png)

![Imagen 6 - Página 28](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina28_img6.png)

---

<!-- Página 29 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
3.2.3.2 Encryption
Refer to the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365] for the
generic encryption mechanism of Office 365, specifically encryption of data at rest and
in transit.
Teams' files are stored on SharePoint and are backed up by SharePoint encryption. See
the guide [CCN-STIC-8xx APPENDIX X - Secure Configuration Guide for Sharepoint
Online].
3.2.3.3 Cleaning of documents
When sharing an electronic copy of certain Office 365 documents or posting certain
documentation on the Internet, it is a good practice to review the document for
hidden data, personal information, and generally any associated metadata. It is
possible to remove this information through the Document Inspector, a feature
accessed from within Word, Excel, PowerPoint or Visio applications.
3.2.3.4 Backup copies
There is no global solution for backing up Office 365.
Although a mechanism based on "retention policies" in certain cases may be sufficient
to ensure the backup of information. See section [3.2.3.1 Qualification of Information]
for how they apply to a document and how they can serve to protect it from deletion.
An interesting option related to backup mechanisms is "Archiving". Over time, a
computer created in Microsoft Teams may become obsolete or you may want to
archive or delete a computer at the end of a project.
Archiving a team in Microsoft Teams
When you archive a file, all activity on that team stops. Archiving a team also archives
private channels and their associated site collections. However, you can still add or
National Cry ptologic Centre 29

![Imagen 1 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img1.png)

![Imagen 2 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img2.png)

![Imagen 3 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img3.png)

![Imagen 4 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img4.png)

![Imagen 5 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img5.png)

![Imagen 6 - Página 29](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina29_img6.png)

---

<!-- Página 30 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
remove members and update roles, and you can still view all activity of the team on
standard and private channels, archives, and chats.
1. In the Microsoft Teams Management Center, select [Teams\Manage tems].
2. Select a team by clicking on the computer name.
3. Choose Archive.
And the following message will appear:
By clicking on "Archive" the
status associated to the device
will change from "Active" to
"Archived".
You can undo the operation at any time with the "Unarchive" option:
Remove a computer in Microsoft Teams
If the team will not be needed in the future, it can be deleted instead of archived.
1. In the Microsoft Teams Management Center, select [Teams\Manage tems].
2. Select a team by clicking on the team’s name.
3. Select "Delete". A confirmation message will be displayed.
National Cry ptologic Centre 30

![Imagen 1 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img1.jpeg)

![Imagen 2 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img2.png)

![Imagen 3 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img3.png)

![Imagen 4 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img4.png)

![Imagen 5 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img5.png)

![Imagen 6 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img6.png)

![Imagen 7 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img7.png)

![Imagen 8 - Página 30](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina30_img8.png)

---

<!-- Página 31 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The operation of restoring a team is done by restoring the Office 365 group associated
with the team. Restoring the Office 365 group of a team restores the contents of the
team, including tabs, standard channels, private channels, and their associated site
collections.
By default, a deleted Office 365 group is kept for 30 days.
3.2.4 Protection of services
3.2.4.1 Protection against denial of service
Office 365 provides advanced threat detection and mitigation systems to protect the
underlying infrastructure from denial of service (DoS) attacks and prevent customer
disruption.
Azure's DDoS defense system is designed not only to withstand attacks from the
outside, but also from other Azure tenants. Exchange Online and SharePoint Online
request limitation mechanisms are part of a multi-layered approach to defend
themselves against DoS attacks.
Refer to the guide [CCN-STIC-884A - Secure Configuration Guide for Azure] for more
information on Azure's DDoS defense system.
4. OTHER SECURITY CONCERNS
From the Microsoft Teams Administration Center, you can configure policies of teams,
messaging, meetings, applications and voice and control to which users in your
organization should be applied. Below are those features that have some relevance to
security.
4.1 Teams Policy
Teams and channel policies are used to control the settings or features that are
available to users when using teams and channels. You can use global policy (the
default for your entire organization) and customize it, or you can create one or more
custom policies for members of a team or channel in your organization.
National Cry ptologic Centre 31

![Imagen 1 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img1.png)

![Imagen 2 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img2.png)

![Imagen 3 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img3.png)

![Imagen 4 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img4.png)

![Imagen 5 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img5.png)

![Imagen 6 - Página 31](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina31_img6.png)

---

<!-- Página 32 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
 Discover private teams: Enable this option to allow users to detect private
teams in the search results and in the computer gallery.
 Create private channels: Activate this option to allow users to create channels.
4.2 Messaging policies
Messaging policies are used to control which chat and channel messaging features are
available to Teams’ users. You can use the global policy (the default for your entire
organization), or you can create one or more custom messaging policies for your
organization's contacts.
By default, a global policy is created (the default option for the entire organization). All
users in your organization will be assigned this messaging policy by default. You can
make changes to this policy, or you can create one or more custom policies and assign
users to them.
For example, suppose you want to make sure that sent messages are not deleted or
modified by users. You should create a new custom policy called "hold sent messages"
with the following settings:
 Owners can delete sent messages.
 Users can NOT delete sent messages
 Users can NOT edit sent messages
1. Access the Microsoft Teams Administration Center. The [Messaging Policies] menu.
2. Press the "Add" button.
National Cry ptologic Centre 32

![Imagen 1 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img1.jpeg)

![Imagen 2 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img2.png)

![Imagen 3 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img3.png)

![Imagen 4 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img4.png)

![Imagen 5 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img5.png)

![Imagen 6 - Página 32](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina32_img6.png)

---

<!-- Página 33 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
3. Set the options and "Save".
4.3 Application permission policies
Application permission policies control which applications will be available to Teams’
users in the organization. You can use the global policy (default for the entire
organization) and customize it, or you can create one or more policies to comply the
needs of your organization.
It is accessed from the Microsoft Teams Administration Center. The [Teams
Applications\Permissions policies] menu.
It allows you to configure which Microsoft, third-party, and Tenant applications can
install the users. It is recommended to enable only those applications that have been
tested and authorized by your organization and maintain control over the applications
that are published in the store.
National Cry ptologic Centre 33

![Imagen 1 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img1.jpeg)

![Imagen 2 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img2.png)

![Imagen 3 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img3.jpeg)

![Imagen 4 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img4.png)

![Imagen 5 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img5.png)

![Imagen 6 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img6.png)

![Imagen 7 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img7.png)

![Imagen 8 - Página 33](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina33_img8.png)

---

<!-- Página 34 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
4.4 Application Configuration Policies
Application configuration policies control how applications are available to the user
with the Teams application.
Applications are anchored to the application bar. This is the
bar on the side of the Teams desktop client and at the bottom
of Teams mobile clients (iOS and Android).
You can use the global policy (the default for the entire organization) and customize it,
or you can create custom policies and assign them to a set of users.
It is accessed from the Microsoft Teams Administration Center. The [Teams
Applications\Configuration policies] menu.
National Cry ptologic Centre 34

![Imagen 1 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img1.png)

![Imagen 2 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img2.png)

![Imagen 3 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img3.png)

![Imagen 4 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img4.png)

![Imagen 5 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img5.png)

![Imagen 6 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img6.png)

![Imagen 7 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img7.png)

![Imagen 8 - Página 34](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina34_img8.png)

---

<!-- Página 35 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
It is recommended to NOT allow "custom application loading".
4.5 Voice Policies
In Microsoft Teams, calling policies control which calling and call forwarding features
are available to users. Calling policies determine whether a user can make private calls,
use call forwarding or simultaneous ringing to other users or external phone numbers,
route calls to voicemail, send calls to Call Groups, use delegation for inbound and
outbound calls, and so on.
Note: Microsoft Teams allows to connect the Online service to a local or cloud PBX
(Private Branch Exchange), through direct routing. A supported Session Border Controller
(SBC) is required. From the security point of view, if your organization plans to integrate this
service, you must ensure that SIP communication is encrypted with TLS 1.2.
National Cry ptologic Centre 35

| In Microsoft Teams, calling policies control which calling and call forwarding features |
| --- |
| are available to users. Calling policies determine whether a user can make private calls, |
| use call forwarding or simultaneous ringing to other users or external phone numbers, |
| route calls to voicemail, send calls to Call Groups, use delegation for inbound and |
| outbound calls, and so on |


![Imagen 1 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img4.png)

![Imagen 5 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img5.png)

![Imagen 6 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img6.png)

![Imagen 7 - Página 35](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina35_img7.png)

---

<!-- Página 36 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
4.6 Meeting guidelines
Meeting policies are used to control what features are available to users when they
join Microsoft Teams meetings.
It is accessed from the Microsoft Teams Administration Center. The [Meetings\
Meeting Policies] menu.
You can use the Gobal policy (Org-wide default) and customize it, or you can create
one or more custom meeting policies for people who host meetings in your
organization.
With these policies you can set, for example, blocking for anonymous users, allowing
or blocking recording, allowing sharing, etc.
4.7 Device directives
Teams allows to connect devices (IP phones) directly to the service. It is becoming
increasingly common to see conference devices and phones being used with Teams.
IP phones and peripheral devices such as headsets and webcams that have been
certified for use with Teams can be monitored. Configuration profiles can be created
and loaded for each type of device in the organization so that changes can be made to
their settings.
It is accessed from the Microsoft Teams Administration Center. Menu [Devices\
Phones].
National Cry ptologic Centre 36

![Imagen 1 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img1.jpeg)

![Imagen 2 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img4.png)

![Imagen 5 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img5.png)

![Imagen 6 - Página 36](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina36_img6.png)

---

<!-- Página 37 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Configuration profiles
From the "Configuration Profiles" tab it is possible to control security options of the
device (IP phone) such as lock, PIN, screen saver, logs, etc.
National Cry ptologic Centre 37

![Imagen 1 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img4.png)

![Imagen 5 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img5.png)

![Imagen 6 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img6.png)

![Imagen 7 - Página 37](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina37_img7.png)

---

<!-- Página 38 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
5. SUMMARY TABLE OF SECURITY MEASURES
The following is a summary table of configurations to be applied for the protection of the service, where the organization will be able to
evaluate which measures of the proposals are fulfilled.
ENS Control Configuration Status
op Operational Framework
op.acc Access Control
op.acc.1 Identification
The use of accounts and assignment of licenses to users has been configured. It applies: It complies:
Following the recommendations of Office 365 based on the guide [CCN-STIC-885A -
Secure Configuration Guide for Office 365]
Yes No Yes No
Evidence collected: Comments:
Yes No
Op.acc.2 Entry Requirements
38
National Cryptological Centre

|  | ENS Control |  |  | Configuration |  |  | Status |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| op |  |  | Operational Framework |  |  |  |  |  |  |  |  |  |
| op.acc |  |  | Access Control |  |  |  |  |  |  |  |  |  |
| op.acc.1 |  |  | Identification |  |  |  |  |  |  |  |  |  |
|  |  |  | The use of accounts and assignment of licenses to users has been configured. <br> Following the recommendations of Office 365 based on the guide [CCN-STIC-885A - <br> Secure Configuration Guide for Office 365] |  |  | It applies: <br> Yes No |  | It complies: <br> Yes No |  |  |  |  |
|  |  |  |  |  |  |  |  |  | Yes |  | No |  |
|  |  |  |  |  |  | Evidence collected: <br> Yes No |  | Comments: |  |  |  |  |
| Op.acc.2 |  |  | Entry Requirements |  |  |  |  |  |  |  |  |  |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 38](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina38_img1.png)

![Imagen 2 - Página 38](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina38_img2.png)

![Imagen 3 - Página 38](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina38_img3.png)

![Imagen 4 - Página 38](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina38_img4.png)

![Imagen 5 - Página 38](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina38_img5.png)

---

<!-- Página 39 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Resource permission levels have been checked: owners and members. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
Op.acc.3 Segregation of functions and tasks
The administrator roles have been properly assigned (in case a delegation It applies: It complies:
has been established for this service).
Following the recommendations of section 3.1.1.3 Segregation of functions
Yes No Yes No
and tasks in the guide [CCN-STIC-885A - Secure Configuration Guide for
Office 365] Evidence collected: Comments:
Yes No
Op.acc. 4 Access rights management process
39
National Cryptological Centre

|  | Resource permission levels have been checked: owners and members. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc.3 | Segregation of functions and tasks |  |  |  |  |  |
|  | The administrator roles have been properly assigned (in case a delegation <br> has been established for this service). <br> Following the recommendations of section 3.1.1.3 Segregation of functions <br> and tasks in the guide [CCN-STIC-885A - Secure Configuration Guide for <br> Office 365] | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc. 4 | Access rights management process |  |  |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 39](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina39_img1.png)

![Imagen 2 - Página 39](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina39_img2.png)

![Imagen 3 - Página 39](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina39_img3.png)

![Imagen 4 - Página 39](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina39_img4.png)

![Imagen 5 - Página 39](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina39_img5.png)

---

<!-- Página 40 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The specific permissions on each of the users of the created computers have It applies: It complies:
been reviewed.
Yes No Yes No
Evidence collected: Comments:
Yes No
Op.acc.5 Authentication mechanism
Multi-Factor Authentication (MFA) has been enabled for users in the It applies: It complies:
organization.
Following the recommendations of 3.1.1.5 Authentication Mechanisms in the
Yes No Yes No
guide [CCN-STIC-885A - Secure Configuration Guide for Office 365]
Evidence collected: Comments:
Yes No
Op.acc.6 Local access
40
National Cryptological Centre

|  | The specific permissions on each of the users of the created computers have <br> been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc.5 | Authentication mechanism |  |  |  |  |  |
|  | Multi-Factor Authentication (MFA) has been enabled for users in the <br> organization. <br> Following the recommendations of 3.1.1.5 Authentication Mechanisms in the <br> guide [CCN-STIC-885A - Secure Configuration Guide for Office 365] | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc.6 | Local access |  |  |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 40](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina40_img1.png)

![Imagen 2 - Página 40](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina40_img2.png)

![Imagen 3 - Página 40](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina40_img3.png)

![Imagen 4 - Página 40](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina40_img4.png)

![Imagen 5 - Página 40](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina40_img5.png)

---

<!-- Página 41 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
The "multi-factor authentication" and/or conditional access policies are It applies: It complies:
enabled, as described in the guide [CCN-STIC-885A - Secure Configuration
Guide for Office 365].
Yes No Yes No
Evidence collected: Comments:
Yes No
Op.acc.6 Local access
A record of successful and unsuccessful access attempts to the system is It applies: It complies:
available.
Yes No Yes No
Evidence collected: Comments:
Yes No
Op.acc.7 Remote Access
Conditional access policies have been configured for remote access, as It applies: It complies:
described in the guide [CCN-STIC-885A - Secure Configuration Guide for
Office 365].
Yes No Yes No
41
National Cryptological Centre

|  | The "multi-factor authentication" and/or conditional access policies are <br> enabled, as described in the guide [CCN-STIC-885A - Secure Configuration <br> Guide for Office 365]. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc.6 | Local access |  |  |  |  |  |
|  | A record of successful and unsuccessful access attempts to the system is <br> available. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| Op.acc.7 | Remote Access |  |  |  |  |  |
|  | Conditional access policies have been configured for remote access, as <br> described in the guide [CCN-STIC-885A - Secure Configuration Guide for <br> Office 365]. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 41](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina41_img1.png)

![Imagen 2 - Página 41](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina41_img2.png)

![Imagen 3 - Página 41](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina41_img3.png)

![Imagen 4 - Página 41](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina41_img4.png)

![Imagen 5 - Página 41](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina41_img5.png)

---

<!-- Página 42 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Evidence collected: Comments:
Yes No
op.exp Exploitation
op.exp.6 Protection against malware
Real time threat detection, accessible from the Office 365 Security and It applies: It complies:
Compliance Center, is checked regularly and a report is generated.
* If the organization has Office 365 Advanced Threat Protection (Office 365
Yes No Yes No
ATP).
Evidence collected: Comments:
Yes No
op.exp. 8 Recording user activity
The audit log has been activated. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
42
National Cryptological Centre

|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| op.exp | Exploitation |  |  |  |  |  |
| op.exp.6 | Protection against malware |  |  |  |  |  |
|  | Real time threat detection, accessible from the Office 365 Security and <br> Compliance Center, is checked regularly and a report is generated. <br> * If the organization has Office 365 Advanced Threat Protection (Office 365 <br> ATP). | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| op.exp. 8 | Recording user activity |  |  |  |  |  |
|  | The audit log has been activated. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 42](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina42_img1.png)

![Imagen 2 - Página 42](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina42_img2.png)

![Imagen 3 - Página 42](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina42_img3.png)

![Imagen 4 - Página 42](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina42_img4.png)

![Imagen 5 - Página 42](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina42_img5.png)

---

<!-- Página 43 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Yes No
op.exp. 10 Protection of activity logs
Consultation of the activity log has been secured by establishing the It applies: It complies:
appropriate roles.
Following the recommendations of section 3.1.2.4 Protection of activity logs
Yes No Yes No
in the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365].
Evidence collected: Comments:
Yes No
op.mon System monitoring
Alerts have been set up in the Office 365 Security and Compliance Center. It applies: It complies:
Following the recommendations of section 3.2.2 System Monitoring in the
guide [CCN-STIC-885A - Secure Configuration Guide for Office 365].
Yes No Yes No
Evidence collected: Comments:
Yes No
43
National Cryptological Centre

|  |  | Yes No |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| op.exp. 10 | Protection of activity logs |  |  |  |  |  |
|  | Consultation of the activity log has been secured by establishing the <br> appropriate roles. <br> Following the recommendations of section 3.1.2.4 Protection of activity logs <br> in the guide [CCN-STIC-885A - Secure Configuration Guide for Office 365]. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| op.mon | System monitoring |  |  |  |  |  |
|  | Alerts have been set up in the Office 365 Security and Compliance Center. <br> Following the recommendations of section 3.2.2 System Monitoring in the <br> guide [CCN-STIC-885A - Secure Configuration Guide for Office 365]. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |
| --- |


| No |
| --- |


![Imagen 1 - Página 43](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina43_img1.png)

![Imagen 2 - Página 43](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina43_img2.png)

![Imagen 3 - Página 43](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina43_img3.png)

![Imagen 4 - Página 43](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina43_img4.png)

![Imagen 5 - Página 43](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina43_img5.png)

---

<!-- Página 44 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
mp Protective Measures
mp.info Protection of information
mp.info.2 Rating of information
Retention policies have been implemented. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
mp.info.2 Rating of information
DLP policies have been implemented. It applies: It complies:
Following the recommendations of section 3.2.3.1.2 DLPs (Data Loss
Prevention) in the guide [CCN-STIC-885A - Secure Configuration Guide for
Yes No Yes No
Office 365].
Evidence collected: Comments:
44
National Cryptological Centre

| mp | Protective Measures |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| mp.info | Protection of information |  |  |  |  |  |
| mp.info.2 | Rating of information |  |  |  |  |  |
|  | Retention policies have been implemented. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| mp.info.2 | Rating of information |  |  |  |  |  |
|  | DLP policies have been implemented. <br> Following the recommendations of section 3.2.3.1.2 DLPs (Data Loss <br> Prevention) in the guide [CCN-STIC-885A - Secure Configuration Guide for <br> Office 365]. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 44](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina44_img1.png)

![Imagen 2 - Página 44](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina44_img2.png)

![Imagen 3 - Página 44](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina44_img3.png)

![Imagen 4 - Página 44](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina44_img4.png)

![Imagen 5 - Página 44](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina44_img5.png)

---

<!-- Página 45 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Yes No
mp.info.2 Rating of information
Sensitivity labels have been applied. It applies: It complies:
Following the recommendations of section 3.2.3.1 Qualification of
information in the guide [CCN-STIC-885A - Secure Configuration Guide for
Yes No Yes No
Office 365]
Evidence collected: Comments:
Yes No
mp.info.9 Backup copies
Archived/deleted teams have been checked in Microsoft Teams. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
45
National Cryptological Centre

|  |  | Yes No |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| mp.info.2 | Rating of information |  |  |  |  |  |
|  | Sensitivity labels have been applied. <br> Following the recommendations of section 3.2.3.1 Qualification of <br> information in the guide [CCN-STIC-885A - Secure Configuration Guide for <br> Office 365] | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
| mp.info.9 | Backup copies |  |  |  |  |  |
|  | Archived/deleted teams have been checked in Microsoft Teams. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 45](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina45_img1.png)

![Imagen 2 - Página 45](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina45_img2.png)

![Imagen 3 - Página 45](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina45_img3.png)

![Imagen 4 - Página 45](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina45_img4.png)

![Imagen 5 - Página 45](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina45_img5.png)

---

<!-- Página 46 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
mp.s Protection of services
mp.s.8 Protection against denial of service
The detailed information in the [CCN-STIC-884A - Azure Secure Configuration It applies: It complies:
Guide] guide on Azure's DDoS defense system has been taken into account.
Yes No Yes No
Evidence collected: Comments:
Yes No
OTHER SECURITY CONCERNS
Teams policies
The teams policies have been reviewed. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
46
National Cryptological Centre

| mp.s | Protection of services |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| mp.s.8 | Protection against denial of service |  |  |  |  |  |
|  | The detailed information in the [CCN-STIC-884A - Azure Secure Configuration <br> Guide] guide on Azure's DDoS defense system has been taken into account. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
|  | OTHER SECURITY CONCERNS |  |  |  |  |  |
|  | Teams policies |  |  |  |  |  |
|  | The teams policies have been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 46](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina46_img2.png)

![Imagen 3 - Página 46](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina46_img3.png)

![Imagen 4 - Página 46](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina46_img4.png)

![Imagen 5 - Página 46](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina46_img5.png)

---

<!-- Página 47 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Yes No
Messaging policies
The messaging policies have been reviewed. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
Application permission policies
The configuration and application permission policies have been reviewed. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
47
National Cryptological Centre

|  |  | Yes No |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Messaging policies |  |  |  |  |  |
|  | The messaging policies have been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
|  | Application permission policies |  |  |  |  |  |
|  | The configuration and application permission policies have been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 47](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina47_img2.png)

![Imagen 3 - Página 47](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina47_img3.png)

![Imagen 4 - Página 47](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina47_img4.png)

![Imagen 5 - Página 47](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina47_img5.png)

---

<!-- Página 48 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
Meeting policies
The meeting policies have been reviewed. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
Device policies
The device policies have been reviewed. It applies: It complies:
Yes No Yes No
Evidence collected: Comments:
Yes No
48
National Cryptological Centre

|  | Meeting policies |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | The meeting policies have been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |
|  | Device policies |  |  |  |  |  |
|  | The device policies have been reviewed. | It applies: <br> Yes No | It complies: <br> Yes No |  |  |  |
|  |  |  |  | Yes |  | No |
|  |  | Evidence collected: <br> Yes No | Comments: |  |  |  |


| Yes |  | No |
| --- | --- | --- |


| Yes |  | No |
| --- | --- | --- |


![Imagen 1 - Página 48](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina48_img1.png)

![Imagen 2 - Página 48](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina48_img2.png)

![Imagen 3 - Página 48](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina48_img3.png)

![Imagen 4 - Página 48](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina48_img4.png)

![Imagen 5 - Página 48](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina48_img5.png)

---

<!-- Página 49 de 49 -->

CCN -STIC 885D Secure Configuration Guide for Microsoft Teams
49
National Cryptological Centre

![Imagen 1 - Página 49](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina49_img1.png)

![Imagen 2 - Página 49](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina49_img2.png)

![Imagen 3 - Página 49](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina49_img3.png)

![Imagen 4 - Página 49](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina49_img4.png)

![Imagen 5 - Página 49](CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN_assets\pagina49_img5.png)