
# Subform API

A subform is a secondary form or a table, which will enable you to include multiple line items into a primary form. They are used to associate multiple items to a single record. On a more technical perspective, subforms easily solve the need for you to establish a one-to-many relationship with data in your CRM, in which many secondary items are associated to a single primary record.

#### Points-to-remember

- The parent **Module API name** can be acquired using the modules API.
- The **Field API names** of the subform can be acquired using Fields Metadata API of the parent module.
- The **Field API names** of the individual fields in a subform can be acquired using Fields Metadata API, with the request URL as **"fields?module={Sub\_form\_api\_name}"**.
- The following editions support subform fields: Enterprise, Zoho One, Ultimate, and CRM Plus.
  - The **Enterprise** and **Zoho One** editions support a maximum of **two subform fields** in a module, while the **Ultimate** and **CRM Plus** editions support **five subform fields** in a module. Each subform field can have a maximum of **100** subform records in a single record in a module.
- A maximum of **5 aggregate custom fields** are available for a subform.

### Get Subform Data

#### Purpose

To get the subform data in a record.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/subforms.html)

[GET /{subform\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/subforms.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}

(or)

{api-domain}/crm/{version}/{subform\_api\_name}

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

READ - Get records in a module

**Note**

- You can get the API name of the subform from the Fields Metadata API.
- Refer Response Structure for more details about the JSON keys, values, and their descriptions.

##### Parameters

- fieldsstring, mandatory when using the subform API name



Specify the API names of the fields whose details you want to receive in the response. Note that you can include a maximum of 50 field API names in this parameter.

**Possible values**: Multiple field API names, comma separated.


#### Sample Request

CurlPythonDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/554023000000298003"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Contacts/554023000000298003"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
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

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read subform records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read subform records

**Resolution:** The user does not have the permission to read subform records. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011"\
            },\
            "Email": null,\
            "$currency_symbol": "Rs.",\
            "Other_Phone": null,\
            "Mailing_State": null,\
            "Other_State": null,\
            "Languages": [\
                {\
                    "Proficiency": "Professional",\
                    "$approval": {\
                        "delegate": false,\
                        "approve": false,\
                        "reject": false,\
                        "resubmit": false\
                    },\
                    "$currency_symbol": "Rs.",\
                    "$process_flow": false,\
                    "Languages_Known": "English",\
                    "Parent_Id": {\
                        "name": "Last_Name1",\
                        "id": "554023000000298003"\
                    },\
                    "$editable": true,\
                    "id": "554023000000473001",\
                    "$approved": true\
                },\
                {\
                    "Proficiency": "Native",\
                    "$approval": {\
                        "delegate": false,\
                        "approve": false,\
                        "reject": false,\
                        "resubmit": false\
                    },\
                    "$currency_symbol": "Rs.",\
                    "$process_flow": false,\
                    "Languages_Known": "French",\
                    "Parent_Id": {\
                        "name": "Last_Name1",\
                        "id": "554023000000298003"\
                    },\
                    "$editable": true,\
                    "id": "554023000000473003",\
                    "$approved": true\
                }\
            ],\
            "Date_created": "2019-03-04",\
            "Other_Country": null,\
            "Last_Activity_Time": "2019-04-22T11:27:23+05:30",\
            "Department": null,\
            "$process_flow": false,\
            "Assistant": null,\
            "Mailing_Country": null,\
            "id": "554023000000298003",\
            "$approved": true,\
            "Reporting_To": null,\
            "$approval": {\
                "delegate": false,\
                "approve": false,\
                "reject": false,\
                "resubmit": false\
            },\
            "Other_City": null,\
            "Created_Time": "2019-03-04T11:51:53+05:30",\
            "$editable": true,\
            "No_of_Employees": null,\
            "Home_Phone": null,\
            "Created_By": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011"\
            },\
            "Secondary_Email": null,\
            "Description": null,\
            "Vendor_Name": null,\
            "Mailing_Zip": null,\
            "Twitter": null,\
            "Other_Zip": null,\
            "Mailing_Street": null,\
            "Salutation": null,\
            "First_Name": null,\
            "Asst_Phone": null,\
            "Full_Name": "Last_Name1",\
            "Record_Image": null,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "554023000000235011"\
            },\
            "Skype_ID": null,\
            "Phone": null,\
            "Account_Name": null,\
            "Email_Opt_Out": false,\
            "Modified_Time": "2019-04-22T11:27:23+05:30",\
            "Date_of_Birth": null,\
            "Mailing_City": null,\
            "Title": null,\
            "Other_Street": null,\
            "Mobile": null,\
            "Territories": [],\
            "Last_Name": "Last_Name1",\
            "Lead_Source": "Advertisement",\
            "Tag": [],\
            "Fax": null\
        }\
    ]
}
```

Show full

Show less

In this response, "Languages" is the subform in the Contacts module with two picklist fields "Languages\_Known" and "Proficiency".

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/subforms.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)