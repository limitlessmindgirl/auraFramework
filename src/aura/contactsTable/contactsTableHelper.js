({
    getContacts: function (component, event, helper) {
        let action = component.get("c.getAllContacts");

        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let contacts = response.getReturnValue();
                component.set("v.allContacts", contacts);
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