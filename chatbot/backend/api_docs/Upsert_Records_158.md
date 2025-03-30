


  - namestring, mandatory



    Represents the name of the feature. **Supported value:** cadences

  - actionstring, mandatory



    Indicates the action based on which the feature will be skipped. The system will skip the feature execution based on this action. **Supported values:**"insert" and "update". For example, if **"action": "insert"**, the system will bypass the feature execution when the record is inserted via the upsert API.

**Note**

- The system checks for duplicate records based on the duplicate check field's values. There are two types of duplicate check fields:
  - **The system-defined duplicate check fields** \- Certain system-generated fields are marked as unique, by default. When you upsert a record, the system checks for duplicate entries in these fields. Refer to **System-defined Duplicate Check Fields** section below to know the module-wise system-defined duplicate check fields.
  - **The user-defined unique fields** \- The fields for which "Do not allow duplicate values" is enabled. Click [here](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/use-custom-fields#Mark_a_Field_as_Unique) to know more.
- You can set the order in which the system checks for duplicate records by specifying the **duplicate\_check\_field array** in the input. Note that you can add **only** system-defined duplicate check fields and user-defined unique fields to the duplicate\_check\_field array.

Example for the Leads module:

"duplicate\_check\_fields": \[\
\
"Email",\
\
"Phone",\
\
"Fax"\
\
\]

Here, "Email" is the system-defined duplicate check field, and "Phone" and "Fax" are the user-defined unique fields for the Leads module.

- If you **do not** specify the duplicate\_check\_fields, the system checks for duplicate records in this order: **system-defined duplicate check fields > user-defined unique fields.**.
- The 'INVALID\_DATA' error is thrown if the field value length exceeds the maximum length defined for that field.
- If an API is used inside a Function and the field value length exceeds the limit, then that function receives an error response from the API. For ex: If the max length for a "Text field" is defined as 10, then value given for it in API cannot be "12345678901", since it has 11 characters.
- A maximum of 100 records can be inserted/updated per API call.
- You must use only Field API names in the input. You can obtain the field API names from
  - [Fields metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) (the value for the key “api\_name” for every field). (Or)
  - **Setup** \> **Developer Hub** \> **APIs and SDKs** \> **API Names** \> **{Module}**. Choose “Fields” from the “Filter By” drop-down.
- The **trigger** input can be **workflow**, **approval**, or **blueprint**. If the trigger is not mentioned, the workflows, approvals and blueprints related to the API will get executed. Enter the trigger value as \[\] to not execute the workflows.
- Records with **Subform** details can also be updated to CRM using the Records API. Please look at [Subforms API](https://www.zoho.com/crm/developer/docs/api/v7/insert-subforms.html) to learn more about updating subform information within a record.
- Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to know more about field types and limits.
- The **$append\_values** key represents whether you want to append the values of the multi-select picklist you specified in the input to the existing values. Specify the API names of the multi-select picklists and "true" or "false" as key-value pairs in this JSON object. The value "true" adds the values in the input to the multi-select picklist, while the value "false" replaces the existing values with the ones in the input.
- You must provide the layout ID field if you want to
  - include the layout specific mandatory fields in the API-level mandatory check
  - include only the fields that are defined in your layout for API- level processing and ignore the rest

### System-defined Duplicate Check Fields

Following are the default duplicate check fields for different modules.

**Leads** \- Email, **Accounts** \- Account\_Name, **Contacts** \- Email, **Deals** \- Deal\_Name, **Campaigns** \- Campaign\_Name, **Cases** \- Subject, **Solutions** \- Solution\_Title, **Products** \- Product\_Name, **Vendors** \- Vendor\_Name, **PriceBooks** \- Price\_Book\_Name, **Quotes** \- Subject, **SalesOrders** \- Subject, **PurchaseOrders** \- Subject, **Invoices** \- Subject, **CustomModules** \- Name

To know the specific details about each field type in Zoho CRM and their limitations, refer to **Sample Attributes** section in [Insert Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html).

### How does the duplicate check work?

Consider a case where the user has configured two unique fields unique1 and unique2 for a module (user-defined unique fields), and Email is a system-defined unique field.

The following table explains how the duplicate check happens for different user inputs to the duplicate\_check\_fields array.

| User Input to the "duplicate\_check\_fields" Array | Duplicate Check Pattern |
| --- | --- |
| unique1 | unique1, unique2 |
| unique2 | unique2, unique1 |
| unique1, unique2 | unique1, unique2 |
| Email | Email, unique1, unique2 |
| No input | System-defined duplicate check field for that module followed by unique fields. That is, Email, unique1, unique2 |

If you do not specify system-defined duplicate check fields in the array, the system will **ignore** them and check **only** for user-defined unique fields.

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Lead_changed",\
            "Email": "newcrmapi@zoho.com",\
            "Company": "abc",\
            "Lead_Status": "Contacted",\
            "Foreign_Languages": [ //multi-select picklist\
                "Korean"\
            ],\
            "$append_values": {\
                "Foreign_Languages": false\
            }\
        },\
        {\
            "Last_Name": "New Lead",\
            "First_Name": "CRM Lead",\
            "Email": "newlead@zoho.com",\
            "Lead_Status": "Attempted to Contact",\
            "Mobile": "7685635434",\
            "Foreign_Languages": [ //multi-select picklist\
                "Korean",\
                "Spanish"\
            ],\
            "$append_values": {\
                "Foreign_Languages": true\
            }\
        }\
    ],
    "skip_feature_execution": [\
        {\
            "name": "cadences",\
            "action": "insert"\
        }\
    ],
    "duplicate_check_fields": [\
        "Email",\
        "Mobile"\
    ],
    "trigger": [\
        "workflow"\
    ]

```

#### Added "DUPLICATE\_DATA" error casePossible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_DATAHTTP 400



invalid data

**Resolution:** The input specified is incorrect. Specify valid input.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.WRITE/ZohoCRM.modules.{module\_name}.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to upsert

**Resolution:** The user does not have permission to upsert records. Contact your system administrator.

- ALREADY\_MODIFIEDHTTP 412



Record updated time has already passed if-unmodified-since time

**Resolution:** The record has been updated after the specified If-Unmodified-Since timestamp. Try again with a more recent value for the _If-Unmodified-Since_ header.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** You have specified a duplicate value for one or more unique fields. The "details" key in the response gives the API name of the field that holds duplicate value in the input. Specify unique values to the unique fields.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to upsert records.

**Resolution:** The user does not have the permission to upsert record details. Contact your system administrator.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more mandatory fields in the input. Refer to [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to know the mandatory fields.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "duplicate_field": "Email",\
            "action": "update",\
            "details": {\
                "Modified_Time": "2020-10-14T10:31:43+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                },\
                "Created_Time": "2019-09-11T16:21:15+05:30",\
                "id": "4150868000000376008",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "duplicate_field": null,\
            "action": "insert",\
            "details": {\
                "Modified_Time": "2020-10-14T10:31:43+05:30",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                },\
                "Created_Time": "2020-10-14T10:31:43+05:30",\
                "id": "4150868000003194003",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "4150868000000225013"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upsert-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)