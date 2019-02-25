
public with sharing class ContactRepository {

	@AuraEnabled
	public static List<Contact> getAllContacts() {
		return [SELECT FirstName, LastName,Title, Phone,Email FROM Contact];
	}

	@AuraEnabled
	public static void save(Contact contact) {
		insert contact;
	}
}