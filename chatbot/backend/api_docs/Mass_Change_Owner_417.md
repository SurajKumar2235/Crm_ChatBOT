
# Mass Change Owner

#### Purpose

To change the owner of the records of a module in a particular custom view and territory in bulk.

#### Endpoints

[POST /{module\_api\_name}/actions/mass\_change\_owner](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_change\_owner

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.change\_owner.CREATE

**Note**

- You cannot change the owner of the related records.
- You can change the owner of up to 50,000 records in a custom view.
- This API schedules a job and gives you a job ID to get the status of the API. You can only retrieve the job status for up to **60 days**.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/actions/mass_change_owner"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Request JSON

- cvidstring, mandatory



The unique ID of the custom view of whose records you want to change the owner. Use the [Custom View Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html) to get the ID of the custom view. Note that when you want to change the owner of the records in a custom view, this API schedules a job and returns a job ID. Use this ID in the [Mass Change Owner Status API](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner-status.html).

- ownerJSON object, mandatory



The unique ID of the new owner you want to assign the records to. Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.

- territoryJSON object, mandatory when you want to change the owner of the records in a territory



The unique ID of the territory whose records you want to change the owner of. Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the ID of the territory.

- criteriaJSON object, optional



Specify criteria to change the owner of records in a module.



  - fieldJSON object, optional



    Specify a field to which the condition is applied by providing its **API name** or **unique ID**. Get the details in [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).

  - comparatorstring, mandatory (it is mandatory when you use criteria)



    Specifies the **comparison** operation. In this case, it's set to **equal**, meaning the field should be equal to the specified value.

  - valuestring, mandatory (it is mandatory when you use criteria)



    The **value** that the specified field should be equal to.

#### Sample Input

``` json
Copied{
    "cvid" : "2423488000000091545",
    "owner":{
        "id" : "2423488000000483001"
    },
    "territory": {
        "id": "2423488000000780003",
        "include_child": true
    },
    "criteria" : {
        "field" : {
            "api_name" : "Stage",
            "id" : "2423488000000000525"
        },
        "comparator" : "equal",
        "value": "Qualification"
    }
}
```

In the sample request, you can see the criteria that filter the records in a **Deals** module based on the condition where the value of the **Stage** field is **Qualification** with the specified territory, and they are assigned to another owner.

#### Response JSON

- code



Represents whether the API was a success, scheduled, or no records were found in the custom view.

- details



Gives you the ID of the mass change owner job. Use this ID in the [Mass Change Owner Status API](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner-status.html).


#### Possible Errors

- INVALID\_DATAHTTP 400



**Reasons**:



- The CVID is invalid.
- The territory's ID is invalid.
- The user's ID is invalid.
- The user you are trying to assign the records to is deleted from your org.
- The user you are trying to assign the records to is inactive.

**Resolutions:**

- Provide valid IDs of the user, CVID, and the territory.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified either the CVID, the owner's ID, or both.

**Resolution:** CVID and Owner's ID is mandatory in the input.

- RECORD\_LIMIT\_EXCEEDEDHTTP 400



The custom view has more than 50,000 records.

**Resolution:** You can only change the owner of up to 50,000 records in a custom view through this API.

- NO\_PERMISSIONHTTP 403



**Reasons:**



- You do not have permission to the module.
- You do not have permission to change the owner.
- You do not have permission to view the records in that custom view.

**Resolution:** Contact your system administrator to obtain sufficient permissions.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in server. Contact the support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "job_id": "3652397000009026002"\
            },\
            "message": "change owner is successfully scheduled",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)