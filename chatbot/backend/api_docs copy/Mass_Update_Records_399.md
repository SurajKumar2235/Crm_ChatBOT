
# Mass Update API

The mass update feature allows you to update the values of specific fields for multiple records in territories or custom views in a module. This API is useful when you want to update the same field for all records in a module, territory, or a custom view.

In this API, the input contains the API names of the fields whose values you want to update, and the record ids, cvids(custom view IDs), or territory\_id.

You can update up to **50,000** (fifty thousand) records using this API.

Mass update of records happens in two ways:

- **Scheduler type**: When you specify custom view ID and territory ID, a job is scheduled in the background and the system returns a "job\_id". Use this job\_id in the GET request to get the result.

- **Non-scheduler type**: When you specify the record IDs, system updates the records instantly. You can update a maximum of 500 records in a single API call in this type of mass update.


### Mass Update Records

#### Purpose

To schedule mass update.

#### Endpoints

[POST /{module\_api\_name}/actions/mass\_update](https://www.zoho.com/crm/developer/docs/api/v7/mass-update-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_update

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Activities, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_update.UPDATE

(or)

scope=ZohoCRM.mass\_update.{module\_name}.UPDATE

#### Possible module names

leads, accounts, contacts, deals, campaigns, activities, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom

#### Possible operation types

UPDATE - To schedule mass update

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Accounts/actions/mass_update"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

``` deluge
CopiedrecordIDList = List();
recordIDList.add("692969000000416006");
recordIDList.add("692969000000287129");
recordIDList.add("692969000000287038");

input1 = Map();
input1.put("Lead_Source", "Advertisement");

inputList = List();
inputList.add(input1);

params = Map();
params.put("data", inputList);
params.put("over_write", true);
params.put("ids", recordIDList);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/Deals/actions/mass_update"\
	type :POST\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, "@input.json" contains the sample input data.

#### Request JSON Keys

- cvidstring, mandatory when custom view fields or territory fields are updated



The custom view ID whose records you want to mass update

- over\_writeboolean, optional



Used when updating a multi-select picklist field.

**Possible values - true:** replaces all the multi-select picklist values with the value specified for mass update.

**false:** adds the specified value to the picklist.Default is **false**.

- territoryJSON object, mandatory, when territory fields are updated



Used to update records in that territory.

**Possible keys - id (string):** The territory ID to update the records in that territory.

**include\_child (boolean):** Boolean field to indicate whether you want to mass update the child territory records as well. Default is **false**.

- idsJSON array, mandatory, when records are updated by IDs



Specify the IDs of the records you want to mass update.


#### Sample Input

``` json
CopiedWith cvid and Territory ID
{
    "data": [\
        {\
            "Industry": "Education"//field to be updated\
        }\
    ],
    "cvid": "554023000000091515", //custom view ID to mass update records in that custom view
    "territory": {
        "id": "554023000000430409",//ID of the territory to mass update records in that territory
        "include_child": true //include child territory records for mass updation
    }
}

With Record IDs in the Input
{
    "data": [\
        {\
            "Lead_Source": "Advertisement",\
            "Type": "Existing Business",\
            "Languages_Known": [\
                "English",\
                "Spanish"\
            ]\
        }\
    ],
    "over_write": true,
    "ids": [\
        "554023000000497007",\
        "554023000000497021"\
    ]
}
```

Show full

Show less

In the sample input with record IDs, "Languages\_Known" is a custom multi-select picklist in the Deals module.

#### Response JSON Keys

- codestring



Indicates the status of mass update

- detailsJSON object



Specifies the "job\_id" (for scheduler type), modified time and the name and ID of the user who modified the record (for non-scheduler type).

- created\_timeDate Time in ISO8601 format



Specifies the time period when the record was created.

- idstring



Specifies the unique ID (record ID) of the record that was updated.

- Created\_ByJSON Object



Specifies the name and ID of the user that created the record.

- messagestring



Specifies if the record is updated or the reason for error, if any.

- statusstring



Specifies the status of the record as updated, error etc.


#### Possible Errors

- INVALID\_DATAHTTP 400



No field found

**Resolution:** No field is specified in the input

- INVALID\_DATAHTTP 400



Max field limit exceeded

**Resolution:** Number of fields to be mass updated has exceeded the allowed limit for that module

- INVALID\_DATAHTTP 400



This field cannot be updated in the Mass Update

**Resolution:** The specified field is not found in the module or it is not allowed for mass update

- INVALID\_DATAHTTP 400



Field cannot be updated as it is associated with a layout rule

**Resolution:** The specified field is used as primary in a layout rule

- INVALID\_DATAHTTP 400



Field cannot be updated as it is associated with a validation rule

**Resolution:** The specified field is used as primary in a validation rule

- INVALID\_DATAHTTP 400



Field is not visible

**Resolution:** The specified field is made invisible/inaccessible to the user

- INVALID\_DATAHTTP 400



The id given seems to be invalid

**Resolution:** The record ID, cvid, or territory ID specified is invalid

- CANNOT\_PROCESSHTTP 400



The record is in stop processing

**Resolution:** The specified record is in the stop processing state

- RECORD\_IN\_BLUEPRINTHTTP 400



The record is in blue print

**Resolution:** The specified record is in blueprint and user tries to update a blueprint picklist value

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** No cvid or record ID is specified in the input

- CANNOT\_PERFORM\_ACTIONHTTP 400



no permission to perform an action on this record

**Resolution:** User does not have permission to perform any action on the record

- ALREADY\_SCHEDULEDHTTP 202



Already a Mass Action scheduler is running for the given cvid

**Resolution:** The records in the custom view specified are already scheduled for mass update

- LIMIT\_EXCEEDEDHTTP 400



Record count exceeded

**Resolution:** Number of records that can be mass updated has exceeded the maximum allowed limit of 50000

- NOT\_APPROVEDHTTP 400



record not approved

**Resolution:** The record with the specified ID is not approved

- INVALID\_DATAHTTP 400



In the non-scheduler type request, one of the record IDs is invalid. The valid record IDs get updated, and the invalid IDs throw an error.

**Resolution:** Specify valid record IDs in the input.

- NO\_RECORDS\_FOUNDHTTP 400



no record found to update

**Resolution:** There are no records in the custom view specified

- NO\_PERMISSIONHTTP 403



permission denied

**Resolution:** User does not have permission to mass update records

- NO\_PERMISSIONHTTP 403



Field Edit Permission not given

**Resolution:** User does not have permission to edit the field

- NO\_PERMISSIONHTTP 403



Customview not accessible

**Resolution:** Custom view is not accessible to the user or the module

- INVALID\_MODULEHTTP 400



the module name given seems to be invalid

**Resolution:** The module name specified is incorrect. Refer to supported modules section above and specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.mass\_update.{module\_name}.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to schedule mass update.

**Resolution:** The user does not have the permission to schedule mass update. Contact your system administrator.

- RECORD\_LOCKEDHTTP 400



Cannot update record that is not approved yet

**Resolution:** Please wait until the Zia image or the merge duplicates process is complete and try again.

- RECORD\_LOCKEDHTTP 400



You cannot perform this operation as the record is locked.

**Resolution:** Please wait until the record is unlocked.

- NOT\_APPROVEDHTTP 400



Cannot update record that is not approved yet

**Resolution:**



- **Case 1:** If the record is in the rejected state due to Zia image validation, either upload a new image (or) delete the failed image and, resubmit the record to Zia image validation.
- **Case 2:** If the record is in Zia record approval, the system will not allow you to update the images of the record until the reviewer approves or rejects the record.

**Note**

- It is mandatory to specify either custom view ID or record IDs in the input.
- It is mandatory to specify the custom view ID when you want to mass update records in a territory.
- You cannot mass update **Email**, **lookup fields**, **layout fields**, **multi line fields**, and **line items**.
- You can mass update up to **three fields** in the **Deals** module and only one field in all other modules in a single API call.
- You can mass update a maximum of **500** records in a single API call when you use the non-scheduler type mass update (i.e with record IDs).
- You can mass update a maximum of **50,000** (fifty thousand) records in a single API call when you use the scheduler type mass update (i.e by specifying the cvid and territory ID).
- While mass updating records based on their IDs, if some of the records have invalid data, only those records will not be processed.
- Use [Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the territory ID.
- For the non-scheduler type mass update, automation rules such as approvals, blueprints, and workflows are triggered automatically.
- For the scheduler type mass update, automation rules are triggered automatically when the record count is less than **1000**. When the record count is greater than 1000, automation rules do not get triggered.

#### Sample Response

``` json
CopiedResponse for scheduler type
{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "job_id": "554023000000506003"\
            },\
            "message": "mass update scheduled successfully",\
            "status": "success"\
        }\
    ]
}

Response for non-scheduler type (with record IDs)
{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2021-03-03T12:17:00+05:30",\
                "Modified_By": {\
                    "name": "Patricia boyle",\
                    "id": "554023000000497007"\
                },\
                "Created_Time": "2021-02-26T19:13:56+05:30",\
                "id": "580845000003654076",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "580845000000242009"\
                }\
            },\
            "message": "record updated",\
            "status": "success"\
        },\
        {\
            "code": "INVALID_DATA",\
            "details": {\
                "id": "554023000000497021"\
            },\
            "message": "the id given seems to be invalid",\
            "status": "error"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-update-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)