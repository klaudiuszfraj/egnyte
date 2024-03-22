# egnyte
service/feature that allows synchronisation of checkbox statuses in a browser (“collaborative editing” of checkboxes).


### Key features
- The service should support multiple HTML forms on multiple websites to handle states of multiple different groups of checkboxes.
- The service should correctly handle a situation when a user closes a browser and connects again.
- The service should reasonably handle lost internet connection and reconnecting.


### Below scenario is optional due to time constraints. Ideally designed architecture should be aware of this scenario and provide a solution that would eventually support that.
- Case 2: Server should handle lost connection and possible conflicts caused by it
- Browser support: Chrome & Firefox


### Bonus tasks (not obligatory):
- The application should be relatively efficient and scale well (feel free to use Amazon services or any other cloud solutions) or explain what eventually could be done to make the application scalable.
- Secure the communication between the client and server.
- Well-thought architecture (e.g. to eventually easily support later radio inputs or <selectmultiple>).
- Clean code.
- Tests (a few, to show that you know how to write correct tests).
