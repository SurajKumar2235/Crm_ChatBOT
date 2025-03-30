
# Mass Delete Records

#### Purpose

To delete the records of a module in bulk. You can delete up to 50,000 records in a custom view or delete up to 500 records using their record IDs in an API call.

#### Endpoints

[POST /{module\_api\_name}/actions/mass\_delete](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_delete

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Services, Appointments, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_delete.DELETE

(or)

scope=ZohoCRM.mass\_delete.{module\_name}.DELETE

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, services, appointments, and custom

**Note**

- You can delete up to 50,000 records from a custom view and 500 records using their record IDs in a single API call.
- When you specify the record IDs, and one or more of them have invalid values, only those records will not be deleted.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/mass_delete"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Request JSON

- cvidstring, mandatory when you do not include "ids"



The unique ID of the custom view whose records you want to delete. Use the [Custom View Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html) to get the ID of the custom view.

- idsJSON object, mandatory when you do not include "cvid"



The unique IDs of the records you want to delete. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record IDs.

- territoryJSON object, optional



The unique ID of the territory whose records you want to delete. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the ID of the territory.



include\_childboolean, optional



Represents whether you want to delete the records from the child territories.


#### Sample Input with Record IDs

``` json
Copied{
    "ids":["3652397000006064023","3652397000003852074"]
}
```

#### Sample Request for Record IDs in the Input

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000006064023"\
            },\
            "message": "record is deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000003852074"\
            },\
            "message": "record is deleted",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

#### Sample Input with CVID and Territory

``` json
Copied{
    "cvid": "3652397000000538003",
    "territory": {
        "id": "3652397000007622003",
        "include_child": true
    }
}
```

#### Response JSON

- code



Represents whether the API was a success or not.

- details



- When you give cvid, the response contains the ID of the mass delete job. Use this ID in the [Mass Delete Status API](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-status.html).
- When you give the record IDs in the request body, this key contains the record ID that was deleted.

#### Possible Errors

- INVALID\_DATAHTTP 400



The record ID is invalid.

**Resolution:** Provide valid IDs.

- ALREADY\_SCHEDULEDHTTP 400



You are trying to mass delete when a mass delete job is already running.

**Resolution:** You can schedule only one mass delete job at a time. Wait for the already scheduled job to finish before scheduling another one.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the CVID, or the record IDs.

**Resolution:** You must specify either the CVID or the record IDs in the input body.

- NOT\_APPROVEDHTTP 400



The record is unapproved.

**Resolution:** You can only delete approved records.

- NOT\_SUPPORTEDHTTP 400



The module is not supported to be mass-deleted through an API.

**Resolution:** Contact your administrator.

- NO\_PERMISSIONHTTP 403



You do not have permission to delete the record or to mass delete.

**Resolution:** Contact your administrator to obtain permission to delete or mass delete records from the module.


#### Sample Response for Input with CVID and Territory

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "job_id": "3652397000009565021"\
            },\
            "message": "mass delete scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)