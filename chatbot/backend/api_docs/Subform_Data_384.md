
# Update Subform Data

#### Purpose

To update a record with subforms in a module.

#### Endpoints

[PUT /{module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-subforms.html)

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

UPDATE - Update records in a module

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts"
-X PUT
-d "@updatecontact.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copieddata1 = Map();
data1.put("id", "692969000000983046");
data1.put("Languages", [{"id":"692969000000983047"},{"id":"692969000000983048","Proficiency":"Native","Languages_Known":"Korean"}]);

dataList = List();
dataList.add(data1);
param = Map();
param.put("data", dataList);

	response = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads"\
	type: PUT\
	parameters: param.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, @updatecontact.json contains the sample input data.

**Note**

- To update multiple subforms, enter the input in the following format.

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
- The "ID" of the record (Ex: Lead ID) must be specified in the input.
- The "ID" of the subform records must be specified.
- Updation of subform records without any JSON objects deletes the subform information within the record. Ex: " subform\_1:\[\] "
- The **update operation** on a subform record will append the provided data with the existing data. For instance, consider a subform **"Proficiency"**, which has a record with ID **"50402XXXX123"**. When you update the parent record with the subform data but without sending the record ID of the existing subform record, the subform will now have two rows with IDs **"50402XXXX123"** and **"50402XXXX456"**(newly appended record ID).
- Also, providing the key **"\_delete"** as **"null"** will delete the subform record. Refer to the Sample Input section.
- Whenever a record is deleted, all the subform details within the parent record will also get deleted.
- You must use only Field API names in the input. You can obtain the field API names from:
  - [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field). (Or)
  - **Setup** \> **Developer Space** \> **APIs** \> **API Names** \> **{{Module}}**. Choose “Fields” from the “Filter By” drop-down.

#### Sample Input for updating an existing record

``` json
Copied{
    "data": [\
        {\
            "id": "554023000000480721",//contact id\
            "Languages": [\
                {\
                    "id": "554023000000480722"//id of the subform record that does not need any update\
                },\
                {\
                    "id":"554023000000480787",//id of the subform record\
                    "Proficiency": "Native",//data to be updated\
                    "Languages_Known": "French"//data to be updated\
                }\
            ],\
            "Availability": [\
                {\
                    "id": "554023000000480728"//id of the subform record that does not need any update\
                },\
                {\
                    "id": "554023000000480728",//id of the subform record\
                    "Weekdays": false//data to be updated\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Sample Input for adding a new subform record

``` json
Copied{
    "data": [\
        {\
            "Language": [\
                {\
                    "Proficiency": "Pofessional"\
                }\
            ]\
        }\
    ]
}
```

#### Sample Input for deleting an existing record

``` json
Copied{
    "data": [\
        {\
            "Language": [\
                {\
                    "id": "554023000000480721",\
                    "_delete": null\
                }\
            ]\
        }\
    ]
}
```

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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update records

**Resolution:** The user does not have permission to update subform records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update subform records

**Resolution:** The user does not have the permission to update subform records. Contact your system administrator.

- INVALID\_DATAHTTP 400



the id given seems to be invalid

**Resolution:** You have specified an incorrect record ID. Please specify a valid record ID. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get valid record IDs.

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
                "Modified_Time": "2019-04-23T17:31:02+05:30",\
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
            "message": "record updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-subforms.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)