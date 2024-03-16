# [WIP]
# Memory Organizer
App to help me document my memories and photos. 

## Motivation
I think I excessively attach sentimental value to objects. This results in me keeping a lot of things that I never think about, but still feel bad about throwing away. Taking a picture of it helps me tidy up b/c I can keep a sentimental object around digitally. 

This is to help me organize those pictures, but can [WIP] also be used as a general file annotator. 

## Objectives
- Learn Electron & Node
- Create something to help me organize my memories
- ???

# Pitfalls 
Since one of the objectives is to learn something, I'll also keep track of some things that tripped me up. 

## `apt` default repos installs an older version of Node
- This resulted in `npm install electron --save-dev` not working 
    - specifically, I think it was the `??` operator that wasn't supported in older versions of the language
    - that operator was used in a setup file for Electron
- This was very confusing b/c I was following a quickstart guide and shouldn't have a had a chance 
to mess anything up yet
- I resolved this by installing an up to date version of Node after I noticed that `nodejs -v` output a very out of date version number
