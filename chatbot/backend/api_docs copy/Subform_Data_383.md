
# Insert Subform Data

#### Purpose

To insert a new record with subforms in a module.

#### Endpoints

[POST /{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/insert-subforms.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Quotes, Sales Orders, Purchase Orders, Invoices and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, quotes, salesorders, purchaseorders, invoices and custom.

#### Possible operation types

ALL - Full access to a record

WRITE - Edit records in a module

CREATE - Create records in a module

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@newlead.json"
-X POST
```

``` deluge
CopiedLanguagesData = List();
	LanguagesData.add({"Proficiency": "Native","Languages_Known": "English"});
	LanguagesData.add({"Proficiency": "Professional","Languages_Known": "French"});

	LeadData = Map();
	LeadData.put("Last_Name", "Contact_test");
	LeadData.put("Email", "contact_test@xyz.com");
	LeadData.put("Company", "Test");
	LeadData.put("Languages", LanguagesData);
	LeadData.put("Availability", [{"Weekends":"false","Weekdays":"true"}]);

	LeadDataList = List();
	LeadDataList.add(LeadData);

	paramsMap = Map();
	paramsMap.put("data", LeadDataList);

	response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads"\
	type: POST\
	parameters: paramsMap.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, @newlead.json contains the sample input data.

**Note**

- To add multiple subforms, enter the input in the following format.

{

“data”: \[\
\
{\
\
....\
\
Subform\_1: \[\
\
{\
\
sub\_form\_data\
\
},\
\
\],\
\
...\
\
},\
\
{\
\
....\
\
Subform\_2: \[\
\
{\
\
sub\_form\_data\
\
},\
\
\],\
\
...\
\
}\
\
\]

}
- The **Enterprise** and **Zoho One** editions support a maximum of **two subform fields** in a module, while the **Ultimate** and **CRM Plus** editions support **five subform fields** in a module. Each subform field can have a maximum of **100** subform records in a single record in a module.
- A maximum of **5 aggregate custom fields** are available for a subform.
- You must use only Field API names in the input. You can obtain the field API names from:
  - [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field). (Or)
  - **Setup** \> **Developer Space** \> **APIs** \> **API Names** \> **{{Module}}**. Choose “Fields” from the “Filter By” drop-down.
- If there are no JSON objects given within the subform attribute, that subform will be deleted.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Contact_test",\
            "Email": "contact_test@xyz.com",\
            "Languages": [\
                {\
                    "Proficiency": "Native",\
                    "Languages_Known": "English"\
                },\
                {\
                    "Proficiency": "Professional",\
                    "Languages_Known": "French"\
                }\
            ],\
            "Availability":[\
            	{\
            		"Weekends":false,\
            		"Weekdays":true\
            	}]\
        }\
    ]
}
```

Here, "Languages" and "Availability" are two subforms in the Leads module. "Proficiency" and "Languages\_Known" are custom picklists in Languages subform. "Weekends" and "Weekdays" are boolean fields in Availability subform.

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to add records

**Resolution:** The user does not have permission to add subform records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add subform records

**Resolution:** The user does not have the permission to add subform records. Contact your system administrator.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Specify valid input.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2019-04-23T16:57:01+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                },\
                "Created_Time": "2019-04-23T16:57:01+05:30",\
                "id": "554023000000480721",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/insert-subforms.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)