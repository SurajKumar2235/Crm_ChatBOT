
# Record Count in a Module

#### Purpose

To fetch the total number of records in the module or the number of records that match the criteria. You can also get the number of records from a custom view of a module.

[GET /{module\_api\_name}/actions/count?cvid={custom\_view\_ID\_here}](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html)

[GET /{module\_api\_name}/actions/count?criteria={criterion\_here}](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html)

[GET /{module\_api\_name}/actions/count?email={email\_here}](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html)

[GET /{module\_api\_name}/actions/count?phone={phone\_number\_here}](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html)

[GET /{module\_api\_name}/actions/count?word={search\_word\_here}](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/count

##### Supported modules

Leads, Accounts, Contacts, Deals, Tasks, Meetings, Calls, Products, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Campaigns, Vendors, Cases, Solutions, Services, Appointments, Appointments Rescheduled History and Custom

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

Scope = ZohoSearch.securesearch.READ

(and)

ZohoCRM.modules.{module\_name}.READ

(and)

scope=ZohoCRM.settings.layouts.READ/ALL

(or)

scope=ZohoCRM.settings.ALL

##### Parameters

- cvidstring, optional



The ID of the custom view from which you want to get the record count. Use the [Custom Views Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html) to get the custom views available in the module. Example: cvid=5690xxxx980.

Note that **you cannot combine search parameters with this parameter**; it will result in the "AMBIGUITY\_DURING\_PROCESSING" error.

- criteriastring, optional



The condition to obtain the number of records that match the criterion. You can filter the records based on the API name of the field. The supported operators are **equals**, **starts\_with**, **in**, **not\_equal**, **greater\_equal**, **greater\_than**, **less\_equal**, **less\_than** and **between**. The supported data types are **picklist**, **id**, **owner\_lookup**, **user\_lookup**, **lookup**, **phone**, **email**, **date**, **datetime**, **integer**, **currency**, **decimal** and **double**.

- phonestring, optional



The total number of records you want to retrieve that contain the given phone number in their Phone field.

Example: phone=9876543210.

- emailstring, optional



The total number of records you want to retrieve that contain the given email ID in their Email field. Ensure that you encode any special characters in the email ID.

Example: email=p%2Bboyle@abc.com (the encoded form for the email p+boyle@abc.com).

- wordstring, optional



The total number of records you want to retrieve that contain the given word in any of their fields.

Example: word=fin.


**Note**

- Apart from the above parameters, you can also use other optional parameters mentioned on the [Search records](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html) page.
- There would be a **1-10 minute delay** in refreshing the statistics.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/count?cvid=554023000000430419"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- AMBIGUITY\_DURING\_PROCESSING HTTP 400



**Reason:**



You have specified "cvid" and one of the search parameters like "criteria", "phone", "email", or "word" in the request.



**Resolution:** You can only include either "cvid" or one of the search parameters in the request.

- INVALID\_QUERYHTTP 400



**Reasons:**



- You have formed an invalid search query.
- The operator is not supported for that field in the query.

**Resolution:** Refer to the "details" key in the response.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the scope required to use this API.

**Resolution:** Use the correct scope and generate the grant and access tokens.


#### Sample Response

``` json
Copied{
    "count": 694
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/module_record_count.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)