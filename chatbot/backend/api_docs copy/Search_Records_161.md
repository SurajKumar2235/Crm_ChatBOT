
# Search Records

#### Purpose

To retrieve the records that match your search criteria.

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/search

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

(and)

scope=ZohoSearch.securesearch.READ

#### Possible module names

leads, accounts, contacts, users, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, notes, appointments, appointments\_rescheduled\_history, and services.

#### Possible operation types

ALL - Full access to the record

READ - Get records from the module

#### Endpoints

[GET /{module\_api\_name}/search?criteria={{criteria\_here}}](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html)

[GET /{module\_api\_name}/search?email={{email\_here}}](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html)

[GET /{module\_api\_name}/search?phone={{phone\_number\_here}}](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html)

[GET /{module\_api\_name}/search?word={{search\_word\_here}}](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html)

### Request Details: _criteria_

|     |     |
| --- | --- |
| **Request URL:** | {api-domain}/crm/v7/{module\_api\_name}/search?criteria={criteria\_here} |

##### Parameters

- criteriastring



- Performs search by following the shown criteria. **(({api\_name}:{operator}:{value})and/or({api\_name}:{operator}:{value}))**
- You can search for a maximum of 10 criteria (with same or different columns).
- The only operator that is supported for _encrypted fields_ is **equals**.
- When you use **"equals"** in Search API, it behaves like **contains** and fetches the records accordingly. For example, if your condition is (Company:equals: **ABC**), the response will contain records with **ABC** as well as **ABC Inc**(i.e. they contain ABC) in their Company fields. For multiple conditions also, equals operator behaves like contains. For example, if your condition is ​((Company:equals:ABC)and(First\_Name:starts\_with:M)), the response will contain records with first name starting with M and with ABC or ABC Inc in their Company fields.
- The **"in"** operator checks if a value is in a list. If you provide multiple values, the response includes records that match any of them.

For example, (Full\_Name:in:Patricia,Boyle,Kate).
- When you use **parentheses or comma** in the value for a criteria, you must **escape** them using a backslash. Further, you must **encode** the value.
  - Example:

    Consider the search term: ((Last\_Name:equals:Burns,B)and(First\_Name:starts\_with:M))

    After **escaping** comma and parenthesis in the value: ((Last\_Name:equals:Burns\\,B)and(First\_Name:starts\_with:M))

    After **encoding** the value: ((Last\_Name:equals:Burns%5C%2CB)and(First\_Name:starts\_with:M))
- When you use **backslash** as the last character in the value for a criteria, you must escape it using another backslash. Further, you must **encode** the value.
  - Example:

    Consider the search term: (Last\_Name:equals:K\\)

    After **escaping** backslash in the value: (Last\_Name:equals:K\\\)

    After **encoding** the value: (Last\_Name:equals:K%5C%5C)
- The supported data types are **picklist**, **owner\_lookup**, **user\_lookup**, **lookup**, **phone**, **email**, **date**, **datetime**, **text**, **textarea**, **integer**, **currency**, **decimal, multiselectpicklist, bigint, percent, formula, website, boolean** and **double**.
- The supported operators are **equals**, **starts\_with**, **in**, **not\_equal**, **greater\_equal**, **greater\_than**, **less\_equal**, **less\_than** and **between**. Refer to the note section below to learn about the supported operator for each field type.

**Note**

The following section gives you the field types and the operators you can use in the "criteria" parameter

- **Date, DateTime :** equals, not\_equal, greater\_equal, greater\_than, less\_equal, less\_than, between, in.
- **Integer, Currency, Decimal :** equals, not\_equal, greater\_equal, greater\_than, less\_equal, less\_than, between, in.
- **Boolean :** equals, not\_equal.
- **textarea :** equals, not\_equal, starts\_with.
- **Lookup(user/owner) :** equals, not\_equal, in.
- **Picklist, Autonumber :** equals, not\_equal, in.
- **Text, Email, Phone, Website :** equals, not\_equal, starts\_with, in.
- **multiselectpicklist :** equals, not\_equal, in, starts\_with.
- **bigint** **:** equals, not\_equal, greater\_than, greater\_equal, less\_than, less\_equal, between, in.
- **percent :** equals, not\_equal, greater\_than, greater\_equal, less\_than, less\_equal, between, in.
- **formula** **:** The supported operators of the formula datatype will depend on the **return type** of the formula. Please check the corresponding datatype's supported operators.

#### Sample Request to Search with criteria

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/search?criteria=Created_Time%3Abetween%3A2024-02-01T18%3A52%3A56%2B00%3A00%2C2024-02-20T18%3A52%3A56%2B00%3A00"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

In this example, the criteria for searching for the DateTime fields are in the ISO8601 format with the current user's time zone. The query is encoded.

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account": null,\
            "Company": "ABC",\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "email": "p.boyle@zylker.com"\
            },\
            "Email": null,\
            "$currency_symbol": "Rs.",\
            "$field_states": null,\
            "$sharing_permission": "full_access",\
            "Last_Activity_Time": null,\
            "Industry": null,\
            "Unsubscribed_Mode": null,\
            "$process_flow": true,\
            "Street": null,\
            "$locked_for_me": false,\
            "Zip_Code": null,\
            "id": "554023000003701012",\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "Created_Time": "2024-02-19T18:30:23-11:00",\
            "$wizard_connection_path": null,\
            "$editable": true,\
            "City": null,\
            "No_of_Employees": null,\
            "Longitude": null,\
            "Converted_Account": null,\
            "State": null,\
            "Country": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "email": "p.boyle@zylker.com"\
            },\
            "$zia_owner_assignment": "owner_recommendation_unavailable",\
            "Secondary_Email": null,\
            "Annual_Revenue": null,\
            "Currency_1": null,\
            "Description": null,\
            "Rating": null,\
            "$review_process": {\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "Website": null,\
            "Twitter": null,\
            "File_Upload": null,\
            "Associated_Contacts": null,\
            "Salutation": null,\
            "Co_Owner": null,\
            "Full_Name": "John Smith",\
            "First_Name": "John",\
            "Lead_Status": null,\
            "Record_Image": null,\
            "Converted_Deal": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "email": "p.boyle@zylker.com"\
            },\
            "$review": null,\
            "Lead_Conversion_Time": null,\
            "Skype_ID": null,\
            "Phone": null,\
            "Image_Upload_1": null,\
            "Email_Opt_Out": false,\
            "$zia_visions": null,\
            "Designation": null,\
            "Modified_Time": "2024-02-19T18:30:23-11:00",\
            "$converted_detail": {},\
            "Unsubscribed_Time": null,\
            "Converted_Contact": null,\
            "Mobile": null,\
            "Record_Status__s": "Available",\
            "$orchestration": false,\
            "Last_Name": "Smith",\
            "Layout": {\
                "name": "Standard",\
                "id": "554023000000095055"\
            },\
            "$in_merge": false,\
            "Locked__s": false,\
            "Lead_Source": null,\
            "Tag": [],\
            "Fax": null,\
            "$approval_state": "approved",\
            "$pathfinder": false\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "sort_by": "id",
        "page": 1,
        "sort_order": "desc",
        "more_records": false
    }
}
```

Show full

Show less

### Request Details: _email_

|     |     |
| --- | --- |
| **Request URL:** | https://www.zohoapis.com/crm/v7/{module\_api\_name}/search?email={email\_here} |

##### Attributes

- emailstring



Performs module search by email. All the email fields of a particular module will be searched and listed.


#### Sample Request to Search by email

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/search?email=newcrmapi@zoho.com"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account": null,\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Company": null,\
            "Email": "newcrmapi@zoho.com",\
            "$currency_symbol": "Rs.",\
            "Visitor_Score": null,\
            "Last_Activity_Time": "2019-03-22T11:10:55+05:30",\
            "Industry": "ASP",\
            "$converted": false,\
            "$process_flow": false,\
            "Street": "Street",\
            "Zip_Code": "Zip_Code",\
            "id": "3652397000000415002",\
            "$approved": true,\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "First_Visited_URL": null,\
            "Days_Visited": null,\
            "Created_Time": "2019-01-10T13:04:32+05:30",\
            "$editable": true,\
            "City": "City",\
            "No_of_Employees": 100,\
            "State": "State",\
            "Country": "Country",\
            "Last_Visited_Time": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Annual_Revenue": 100000,\
            "Secondary_Email": "newcrmapi@zoho.com",\
            "Description": "Design your own layouts that align your business processes precisely. Assign them to profiles appropriately.",\
            "Number_Of_Chats": null,\
            "Rating": "Acquired",\
            "Website": "crm.zoho.com",\
            "Twitter": "Twitter",\
            "Average_Time_Spent_Minutes": null,\
            "Associated_Contacts": null,\
            "Salutation": "Mr.",\
            "First_Name": "First_Name",\
            "Lead_Status": "Contacted",\
            "Full_Name": "Mr. First_Name Last_Name",\
            "Record_Image": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Skype_ID": "Skype_ID",\
            "Phone": "98883434559",\
            "Email_Opt_Out": false,\
            "Designation": "Designation",\
            "Modified_Time": "2019-03-22T11:10:55+05:30",\
            "$converted_detail": {},\
            "Mobile": "98883434559",\
            "Prediction_Score": null,\
            "First_Visited_Time": null,\
            "Last_Name": "Last_Name",\
            "Referrer": null,\
            "Lead_Source": "Twitter",\
            "Tag": [],\
            "Fax": "Fax"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

### Request Details: _phone_

|     |     |
| --- | --- |
| **Request URL:** | https://www.zohoapis.com/crm/v7/{module\_api\_name}/search?phone={phone\_number\_here} |

##### Attributes

- phonestring



Performs module search by phone number. All the phone fields of a particular module will be searched and listed.


#### Sample Request to Search by Phone

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/search?phone=98883434559
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account": null,\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Company": null,\
            "Email": "newcrmapi@zoho.com",\
            "$currency_symbol": "Rs.",\
            "Visitor_Score": null,\
            "Last_Activity_Time": "2019-03-22T11:10:55+05:30",\
            "Industry": "ASP",\
            "$converted": false,\
            "$process_flow": false,\
            "Street": "Street",\
            "Zip_Code": "Zip_Code",\
            "id": "3652397000000415002",\
            "$approved": true,\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "First_Visited_URL": null,\
            "Days_Visited": null,\
            "Created_Time": "2019-01-10T13:04:32+05:30",\
            "$editable": true,\
            "City": "City",\
            "No_of_Employees": 100,\
            "State": "State",\
            "Country": "Country",\
            "Last_Visited_Time": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Annual_Revenue": 100000,\
            "Secondary_Email": "newcrmapi@zoho.com",\
            "Description": "Design your own layouts that align your business processes precisely. Assign them to profiles appropriately.",\
            "Number_Of_Chats": null,\
            "Rating": "Acquired",\
            "Website": "crm.zoho.com",\
            "Twitter": "Twitter",\
            "Average_Time_Spent_Minutes": null,\
            "Associated_Contacts": null,\
            "Salutation": "Mr.",\
            "First_Name": "First_Name",\
            "Lead_Status": "Contacted",\
            "Full_Name": "Mr. First_Name Last_Name",\
            "Record_Image": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Skype_ID": "Skype_ID",\
            "Phone": "98883434559",\
            "Email_Opt_Out": false,\
            "Designation": "Designation",\
            "Modified_Time": "2019-03-22T11:10:55+05:30",\
            "$converted_detail": {},\
            "Mobile": "98883434559",\
            "Prediction_Score": null,\
            "First_Visited_Time": null,\
            "Last_Name": "Last_Name",\
            "Referrer": null,\
            "Lead_Source": "Twitter",\
            "Tag": [],\
            "Fax": "Fax"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

### Request Details: _word_

|     |     |
| --- | --- |
| **Request URL:** | https://www.zohoapis.com/crm/v7/{module\_api\_name}/search?word={search\_word\_here} |

##### Attributes

- wordstring



Performs global search by word.


#### Sample Request to Search by word

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/search?word=abc"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Company": "Company1",\
            "Email": null,\
            "$currency_symbol": "Rs.",\
            "Visitor_Score": null,\
            "Last_Activity_Time": null,\
            "Industry": null,\
            "$converted": false,\
            "$process_flow": false,\
            "Street": null,\
            "Zip_Code": null,\
            "id": "3652397000000562046",\
            "$approved": true,\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "First_Visited_URL": null,\
            "Days_Visited": null,\
            "Created_Time": "2019-02-19T12:57:55+05:30",\
            "$editable": true,\
            "City": null,\
            "No_of_Employees": null,\
            "Campaigns_Lookup": null,\
            "State": null,\
            "Country": null,\
            "Last_Visited_Time": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Annual_Revenue": null,\
            "Secondary_Email": null,\
            "Description": null,\
            "Number_Of_Chats": null,\
            "Rating": null,\
            "Website": null,\
            "Twitter": null,\
            "Average_Time_Spent_Minutes": null,\
            "Salutation": null,\
            "First_Name": null,\
            "Lead_Status": null,\
            "Full_Name": "abc",\
            "Record_Image": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Skype_ID": null,\
            "Phone": null,\
            "Email_Opt_Out": false,\
            "Designation": null,\
            "Modified_Time": "2019-02-19T12:57:55+05:30",\
            "$converted_detail": {},\
            "Mobile": null,\
            "Prediction_Score": null,\
            "First_Visited_Time": null,\
            "Last_Name": "abc",\
            "Referrer": null,\
            "Lead_Source": null,\
            "Tag": [],\
            "Fax": null\
        },\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Company": "abc",\
            "Email": null,\
            "$currency_symbol": "Rs.",\
            "Visitor_Score": null,\
            "Last_Activity_Time": "2019-02-19T12:06:28+05:30",\
            "Industry": "ERP (Enterprise Resource Planning)",\
            "$converted": false,\
            "$process_flow": false,\
            "Street": null,\
            "Zip_Code": null,\
            "id": "3652397000000538029",\
            "$approved": true,\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "First_Visited_URL": null,\
            "Days_Visited": null,\
            "Created_Time": "2019-02-14T18:19:22+05:30",\
            "$editable": true,\
            "City": "Albany",\
            "No_of_Employees": null,\
            "Campaigns_Lookup": null,\
            "State": null,\
            "Country": null,\
            "Last_Visited_Time": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Annual_Revenue": null,\
            "Secondary_Email": null,\
            "Description": null,\
            "Number_Of_Chats": null,\
            "Rating": null,\
            "Website": null,\
            "Twitter": null,\
            "Average_Time_Spent_Minutes": null,\
            "Salutation": null,\
            "First_Name": "Test1",\
            "Lead_Status": "Contacted",\
            "Full_Name": "Test1 Lead1",\
            "Record_Image": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "Skype_ID": null,\
            "Phone": null,\
            "Email_Opt_Out": true,\
            "Designation": "Team Lead",\
            "Modified_Time": "2019-02-19T12:06:28+05:30",\
            "$converted_detail": {},\
            "Mobile": null,\
            "Prediction_Score": null,\
            "First_Visited_Time": null,\
            "Last_Name": "Lead1",\
            "Referrer": null,\
            "Lead_Source": "Advertisement",\
            "Tag": [],\
            "Fax": null\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

### Other optional parameters

- convertedstring



To get the list of converted records. Default value is **false**.



- **true** \- get only converted records
- **false** \- get only non-converted records
- **both** \- get all records

- approvedstring



To get the list of approved records. Default value is **true**.



- **true** \- get only approved records
- **false** \- get only records which are not approved
- **both** \- get all records

- pageinteger



To get the list of records from the respective pages. Default value for page is **1**.

- per\_pageinteger



To get the list of records available per page. The default and the maximum possible value is **200**.

- typestring



To get a specific user type from the _Users_ module. Please note that this parameter is supported only for **Users** module.



The possible values are:



- AllUsers
- ActiveUsers
- DeactiveUsers
- ConfirmedUsers
- ConfirmedReportingUsers
- NotConfirmedUsers
- DeletedUsers
- ActiveConfirmedUsers
- AdminUsers
- ActiveConfirmedAdmins
- CurrentUser

#### Sample Request: To Search with a Single Criterion

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Campaigns/search?criteria=Campaign_Name:equals:CRM&fields=Campaign_Name,Type"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- Only one of the mandatory parameters (criteria, email, phone, word) would work at one point of time. Furthermore, if two parameters are given simultaneously, preference will be given in the order **criteria, email, phone, and word**, and only one of them would work.
- The **page** and **per\_page** parameter is used to fetch records according to their position in the CRM. Let's assume that the user has to fetch 400 records. The maximum number of records that one can get for an API call is 200. So, for records above the 200th position, they cannot be fetched. By changing the values of the **page** (1, 2) and **per\_page** (200) parameters, the user can fetch all 400 records using 2 API calls.
- You can search for and fetch a maximum of 2000 records using this API. Exceeding this limit throws the "LIMIT\_REACHED" error.
- The value of the fields with sensitive health data will be retrieved **only** when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value will be **null**. Refer to [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) for more details.
- When you create or edit a record, and search for it immediately, you may face the **204 NO CONTENT** error due to a delay in indexing. To fetch records without any delay, use the [Query API](https://www.zoho.com/crm/developer/docs/api/v7/Get-Records-through-COQL-Query.html).
- The " **in"** operator supports upto **100** values.
- The **"full\_name"** field contains the concatenated values of the **First Name** and **Last Name** fields.

This is a read-only field available only in the Leads, Contacts, and Users modules.

#### Possible Errors

- EXPECTED\_PARAM\_MISSINGHTTP 400



mandatory param missing

**Resolution:** Specify any of the mandatory parameters (criteria/email/phone/word) in your request to search based on criteria.

- LIMIT\_REACHEDHTTP 400



Maximum response iteration limit reached

**Resolution:** The search records API returns only 2000 records in an API call.

- INVALID\_QUERYHTTP 400



invalid query formed

**Resolution:** The operators/field API names in your search query are invalid, the value passed does not match the expected data type of the search field, there is a special character in the search value, or the field specified is not available in the search module. Refer to the "details" JSON object in the response to know which value is incorrect.

- INVALID\_DATAHTTP 400



The search value contains special characters or does not contain at least two characters

**Resolution:** Specify at least two characters in the search value and do not input special characters.

- NOT\_SUPPORTEDHTTP 400



module not supported for search

**Resolution:** The module you have specified is not supported for search operation. Refer to possible modules section above and specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoSearch.securesearch.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read module details.

**Resolution:** The user does not have the permission to retrieve module details. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Type": "Trade Show",\
            "Campaign_Name": "CRM",\
            "id": "3652397000002247003"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/search-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)