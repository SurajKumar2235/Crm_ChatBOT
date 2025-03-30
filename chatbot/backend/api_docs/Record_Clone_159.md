
# Record Clone

#### Purpose

To clone a record in a module.

#### Endpoints

[POST /{module\_api\_name}/{record\_id}/actions/clone](https://www.zoho.com/crm/developer/docs/api/v7/record-clone.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/clone

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Appointments Rescheduled History, Services, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.modules.ALL

or

scope = ZohoCRM.modules.{module\_name}.CREATE

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, appointments, appointments\_rescheduled\_history, services, notes, and custom.

#### Sample Request

``` curl
Copied"https://www.zohoapis.com/crm/v7/Leads/5725767000002529010/actions/clone"
-X POST
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxd"

```

For detailed information regarding the input JSON keys, please refer to the [Insert records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html).

#### Input JSON Key

- skip\_feature\_executionJSON array, optional



By default, if a Cadence is configured for a module, it will be executed automatically when you the clone a record via API. This key lets you **skip the execution of the Cadences feature** during the records clone operation. Specify **"cadences"** as the value for the **"name"** key to skip Cadences execution for the record. Ensure you include this key alongside the **"data"** key in your request. The supported value for the "name" key is **"cadences"**.


**Notes**

- By default, when you clone a record, the field values of the parent record will also be copied to the cloned record. If you want to modify certain fields or to add value to some fields, specify their field API names and their corresponding values in the input body. Refer to the **Sample Input sections** in the [Insert Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html)  to know how to add values to fields in a module. Please note that if you do not intend to make any changes to field values, you can omit the input body during the API request.
- The Subform records in a module can only be cloned along with its parent record. See the [Subforms API](https://www.zoho.com/crm/developer/docs/api/v7/subforms.html) for more information.
- The mandatory fields in the input should not be **null**.
- _The following **fields/properties** will be excluded during the record cloning process:_
  - **Field Types:**
    - File Upload
    - Image Upload
  - **Fields:**
    - wizard
    - data\_processing\_basis\_details _(If GDPR is enabled)_
  - **Field Properties :**
    - read\_only
    - external
  - **$ properties** will be omitted while cloning a record.
- _Modules-specific **fields** will be excluded during the record cloning process :_
  - **Events Module :**
    - recurring\_activity
    - remind\_at
  - **Services Module :**
    - Status
    - Unavailable\_From
    - Unavailable\_Till
  - **Appointments Module :**
    - **Fields** : Status, Reschedule\_Count, Job\_Sheet\_Created\_\_s, and Job\_Sheet\_Section\_\_s.

      **Note :** Only the " **Appointment Information**" section and its fields in it will be cloned.
- The **Sample Inputs**, **Sample Responses,** and **Possible Errors** mentioned in the [Insert Record API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html) are applicable to the [Record Clone API](https://www.zoho.com/crm/developer/docs/api/v7/record-clone.html).

#### Sample Input

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Patricia",\
            "Company": "Info Technology",\
            "Email": "patricia@mail.com",\
            // Modifying Subform records\
            "Project_Details": //API name of the subform\
            [\
                {\
                    // Assigning new values to the Subform records\
                    "Project_Name": "Mobile App Development for Productivity",\
                    "Project_Type": "Mobile App Development",\
                    "Expected_Budget": 50000,\
                    "Status": "Negotiation in Process"\
                }\
            ]\
        }\
    ],
    "skip_feature_execution": [\
        {\
            "name": "cadences"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



Invalid data or request body

**Resolution:** Specify a valid input or request body. Refer to the [Insert Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html) for more information.

- DUPLICATE\_DATAHTTP 400



Duplicate data

**Resolution:** The unique field's value (Example: Phone in the Leads module) should be unique across the module. Assign unique values to the unique keys.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required fields are missing

**Resolution:** You have not specified one or more mandatory fields. Refer to the **System-defined mandatory fields** for each module detailed in the [Insert Records API](https://www.zoho.com/crm/developer/docs/api/v7/insert-records.html).

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to clone a record. Create a new token with the required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



No permission to clone a record

**Resolution:** Contact the administrator.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2024-06-05T04:28:30-07:00",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5725767000000411001"\
                },\
                "Created_Time": "2024-06-05T04:28:30-07:00",\
                "id": "5725767000002954096",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5725767000000411001"\
                },\
                "$approval_state": "approved"\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/record-clone.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)