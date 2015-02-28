angular.module('inventoryApp').factory('FormData', function() {
    var FormData = {},
        formTemplates = {
            sites: {
                scope: "site",
                sections: [
                    {
                        title: "Site Details",
                        sectionType:
                            {
                                type: "standard"
                            },
                        inputs: [
                            {
                                label: "Code",
                                placeHolder: "Enter site code",
                                type: "text",
                                model: "site.Code",
                                widthClass: "col-md-6",
                                idName: "siteCode"
                            },
                            {
                                label: "Name",
                                placeHolder: "Enter site name",
                                type: "text",
                                model: "site.Name",
                                widthClass: "col-md-6",
                                idName: "siteName"
                            },
                            {
                                label: "Type",
                                placeHolder: "Enter site type",
                                type: "text",
                                model: "site.SiteType",
                                widthClass: "col-md-6",
                                idName: "siteType"
                            },
                            {
                                label: "Phone Number",
                                placeHolder: "Enter site phone number",
                                type: "phone",
                                model: "site.PhoneNumber",
                                widthClass: "col-md-6",
                                idName: "sitePhone"
                            }
                        ]
                    },
                    {
                        title: "Site Address",
                        sectionType:
                            {
                                type: "standard"
                            },
                        inputs: [
                            {
                                label: "Address",
                                placeHolder: "Enter a site address",
                                type: "text",
                                model: "site.Address.AddressLine1",
                                widthClass: "col-md-12",
                                idName: "siteAddressAddress1"
                            },
                            {
                                label: "",
                                placeHolder: "suite#/additional",
                                type: "text",
                                model: "site.Address.AddressLine2",
                                widthClass: "col-md-6",
                                idName: "siteAddressAddress2"
                            },
                            {
                                label: "City",
                                placeHolder: "Enter city",
                                type: "text",
                                model: "site.Address.City",
                                widthClass: "col-md-6",
                                idName: "siteAddressCity"
                            },
                            {
                                placeHolder: "Enter a state",
                                type: "text",
                                model: "site.Address.State",
                                widthClass: "col-md-4",
                                idName: "siteAddressState"
                            },
                            {
                                label: "Zip Code",
                                placeHolder: "Enter a zip",
                                type: "phone",
                                model: "site.Address.Zip",
                                widthClass: "col-md-4",
                                idName: "siteAddressZip"
                            },
                            {
                                label: "Country",
                                placeHolder: "Enter a country",
                                type: "text",
                                model: "site.Address.Country",
                                widthClass: "col-md-4",
                                idName: "siteAddressCountry"
                            }
                        ]
                    },
                    {
                        title: "Site Contact",
                        sectionType:
                            {
                                type: "multiple",
                                repeat: ["contact", "site.SiteContacts"],
                                button: "Add a Contact"
                            },
                        inputs: [
                            {
                                label: "First",
                                placeHolder: "Enter a first name",
                                type: "text",
                                model: "contact.FirstName",
                                widthClass: "col-md-6",
                                idName: "siteContactFirst"
                            },
                            {
                                label: "Last",
                                placeHolder: "Enter a last name",
                                type: "text",
                                model: "contact.LastName",
                                widthClass: "col-md-6",
                                idName: "siteContactLast"
                            },
                            {
                                placeHolder: "Enter a Title",
                                type: "text",
                                model: "contact.Title",
                                widthClass: "col-md-6",
                                idName: "siteContactTitle"
                            },
                            {
                                placeHolder: "Enter an email",
                                type: "text",
                                model: "contact.EmailAddress",
                                widthClass: "col-md-6",
                                idName: "siteContactEmail"
                            },
                            {
                                placeHolder: "Enter a primary phone",
                                type: "phone",
                                model: "contact.PrimaryPhone",
                                widthClass: "col-md-6",
                                idName: "siteContactPrimary"
                            },
                            {
                                placeHolder: "Enter a mobile phone",
                                type: "phone",
                                model: "contact.MobilePhone",
                                widthClass: "col-md-6",
                                idName: "siteContactMobile"
                            }
                        ]
                    },
                    {
                        title: "Site Notes",
                        sectionType:
                            {
                                type: "standard"
                            },
                        inputs: [
                            {
                                label: "",
                                placeHolder: "",
                                type: "textArea",
                                model: "site.SiteNotes",
                                widthClass: "col-md-12",
                                idName: "siteNotes",
                                rows: 4
                            }
                        ]
                    }
                ]
            },
            vendors: {},
            circuits: {}
        };
    FormData.getFormByType = function(type) {
        return formTemplates[type];
    };

    return FormData;
});