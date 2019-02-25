({
    saveNewContact: function (component, event, helper) {
        let action = component.get("c.save");
        action.setParams({
            contact: component.get("v.newContact")
        });
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                var cmpEvent = $A.get("e.c:refreshTableEvent");

                //cmpEvent.setParams({ "myParam" : myValue });

                cmpEvent.fire()

            } else {
                let errors = response.getError();
                let message = 'Unknown error'; // Default error message
                // Retrieve the error message sent by the server
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    message = errors[0].message;
                }
                // Display the message
                console.error(message);
            }
        });
        $A.enqueueAction(action);
    }
})