
# Get Sources by Type

#### Purpose

To get the details of a member of a user group by the type.

#### Endpoints

[GET /settings/user\_groups/{group\_id}/sources](https://www.zoho.com/crm/developer/docs/api/v7/get-sources-by-type.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/user\_groups/{group\_id}/sources

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.user\_groups.READ

##### Parameters

- typemandatory if you want to filter by type



To get the details of the members of a group by type. The possible values are **users**, **roles**, **groups**, and **territories**.

- user\_typemandatory if you want to filter by the user type



To get the details of the members of a group by user type. The possible values are **active**, **inactive**, and **deleted**.

- pagenumber, optional



To get the list of records from the respective pages. The default value is **1**.

- per\_pagenumber, optional



To get the list of records available per page. The default and the maximum possible value is **200**.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/user_groups/3652397000009952001/sources?type=roles"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- sourceJSON Object



This holds the name and ID based on the type.



- For **type=users** \- The name and ID of the users that are a part of the user group.
- For **type=roles** \- The name and ID of the roles that are present in the user group.
- For **type=territories** \- The name and ID of the territories that are present in the user group.
- For **type=groups** \- The name and ID of the other user groups that are present in this user group.

- typestring



The type based on which you have filtered the user group.

- subordinatesstring



The boolean field that represents whether this source has subordinates.

- infoJSON object



The number of records fetched in this API call(count), page, per\_page, and if more records are present that are yet to be fetched(more\_records).


#### Possible Errors

- INVALID\_DATAHTTP 400



The group ID is incorrect in the URL.

**Resolution:** Specify a valid group ID. Use the [Get User Groups API](https://www.zoho.com/crm/developer/docs/api/v7/get-user-groups.html) to get the ID of the user group.


#### Sample Response

``` json
Copied{
    "sources": [\
        {\
            "source": {\
                "name": "CEO",\
                "id": "3652397000000026005"\
            },\
            "type": "roles",\
            "subordinates": false\
        },\
        {\
            "source": {\
                "name": "Manager",\
                "id": "3652397000000026008"\
            },\
            "type": "roles",\
            "subordinates": true\
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

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-sources-by-type.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)