
# Mass Delete Status

#### Purpose

To get the status of the mass delete job scheduled previously.

#### Endpoints

[GET /{module\_api\_name}/actions/mass\_delete?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_delete?job\_id={job\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Services, Appointments, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_delete.READ

(or)

scope=ZohoCRM.mass\_delete.{module\_name}.READ

#### Parameters

- job\_idstring, mandatory



Specifies the unique ID of the mass delete job obtained in the response of [Mass Delete Records](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/mass_delete?job_id= 3652397000009565021"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- Statusstring



Indicates the status of the mass delete API. Possible values are "COMPLETED", "RUNNING", and "FAILED".

- Total\_Countinteger



Specifies the total number of records that were scheduled to be deleted.

- Failed\_Countinteger



Specifies the number of records that were not deleted.

- Deleted\_Countinteger



Specifies the number of records that were deleted successfully.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Status": "COMPLETED",\
            "Failed_Count": 0,\
            "Deleted_Count": 9,\
            "Total_Count": 9\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)