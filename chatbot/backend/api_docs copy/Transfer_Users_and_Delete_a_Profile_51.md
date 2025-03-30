
# Transfer Users and Delete a Profile

#### Purpose

To transfer the users to a new profile and delete the old one.

#### Endpoints

[DELETE /settings/profiles/{profile-id}?transfer\_to={existing\_profile\_id}](https://www.zoho.com/crm/developer/docs/api/v7/transfer-delete-profile.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/profiles/{profile-id}?transfer\_to={existing\_profile\_id}

Where, _profile-id_ is the unique ID of the profile you want to delete.

_existing\_profile\_id_ is the unique ID of the existing profile you want to transfer the users to.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.profiles.ALL

(or)

scope=ZohoCRM.settings.profiles.DELETE

##### Parameters

- transfer\_tonumber, mandatory



The unique ID of the profile you want to transfer the records of the old profile to.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/profiles/3652397000009592005?transfer_to=3652397000000026011"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not included the transfer\_to parameter.

**Resolution:** The transfer\_to parameter is mandatory to transfer the users to the new profile and delete the old one. Use the [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to get the ID of the profile you want to transfer the users to.

- INVALID\_DATAHTTP 400



The profile ID is either incorrect or deleted already.

**Resolution:** Specify a valid profile ID. Use the [Get Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to get the ID of the profile you want to transfer the users to.


#### Sample Response

``` json
Copied{
    "code": "SUCCESS",
    "details": {},
    "message": "Profile deleted",
    "status": "success"
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer-delete-profile.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)