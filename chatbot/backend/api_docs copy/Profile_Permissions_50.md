
# Update Profile Permissions

#### Purpose

To update the permissions of a profile.

#### Endpoints

[PUT /settings/profiles/{profile-id}](https://www.zoho.com/crm/developer/docs/api/v7/update-profile-permission.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/profiles/{profile-id}

Where, _profile-id_ is the unique ID of the existing profile you want to update the permission for. Use the [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to get this ID.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.profiles.ALL

(or)

scope=ZohoCRM.settings.profiles.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/profiles/3652397000009592005"
-X PUT
-d "@update.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON

- namestring, optional



The name of the profile.

- permissions\_detailsJSON Array, mandatory



- **id**- _string, mandatory_ \- The ID of the permission you want to enable or disable for this profile. The **permission\_details** key in the response of [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) gives you the ID of every permission available for the profile.
- **enabled**- _boolean, mandatory_ \- The boolean key to enable or disable a permission for this profile.

#### Sample Input

``` json
Copied{
    "profiles": [\
        {\
            "name": "test",\
            "permissions_details": [\
                {\
                    "id": "3652397000000026530",\
                    "enabled": true\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The profile ID is incorrect.

**Resolution:** Use the [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to get this ID.


#### Sample Response

``` json
Copied{
    "profiles": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009592005"\
            },\
            "message": "profile updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-profile-permission.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)