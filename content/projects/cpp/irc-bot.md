---
title: "IRC Bot"
projectCategory: "cpp"
developmentStart: "2010-04-13"
releaseDate: "2010-05-10"
---

The IRCBot is split into two parts. The Core and many modules.

The core provides only connection functionality to connect to many IRC servers 
with one bot instance. All additional functions are implemented in modules. 
These modules can be loaded, unloaded and reloaded at runtime.

The core and the modules communicate with a C-API and JSON for all data.
