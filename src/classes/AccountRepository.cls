
public with sharing class AccountRepository {

	@AuraEnabled
	public static List<Account> getAllAccounts() {
		return [SELECT Name, BillingStreet, BillingCity, BillingCountry FROM Account];
	}

}