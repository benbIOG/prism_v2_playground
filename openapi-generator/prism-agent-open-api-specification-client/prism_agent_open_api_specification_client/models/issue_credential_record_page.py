from typing import TYPE_CHECKING, Any, Dict, List, Type, TypeVar, Union

import attr

from ..types import UNSET, Unset

if TYPE_CHECKING:
    from ..models.issue_credential_record import IssueCredentialRecord


T = TypeVar("T", bound="IssueCredentialRecordPage")


@attr.s(auto_attribs=True)
class IssueCredentialRecordPage:
    """
    Attributes:
        self_ (str): The reference to the connection collection itself. Example: https://atala-prism-products.io/dids.
        kind (str): The type of object returned. In this case a `Collection`. Example: Collection.
        page_of (str): Page number within the context of paginated response.
        contents (List['IssueCredentialRecord']):
        next_ (Union[Unset, str]): URL of the next page (if available)
        previous (Union[Unset, str]): URL of the previous page (if available)
    """

    self_: str
    kind: str
    page_of: str
    contents: List["IssueCredentialRecord"]
    next_: Union[Unset, str] = UNSET
    previous: Union[Unset, str] = UNSET
    additional_properties: Dict[str, Any] = attr.ib(init=False, factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        self_ = self.self_
        kind = self.kind
        page_of = self.page_of
        contents = []
        for contents_item_data in self.contents:
            contents_item = contents_item_data.to_dict()

            contents.append(contents_item)

        next_ = self.next_
        previous = self.previous

        field_dict: Dict[str, Any] = {}
        field_dict.update(self.additional_properties)
        field_dict.update(
            {
                "self": self_,
                "kind": kind,
                "pageOf": page_of,
                "contents": contents,
            }
        )
        if next_ is not UNSET:
            field_dict["next"] = next_
        if previous is not UNSET:
            field_dict["previous"] = previous

        return field_dict

    @classmethod
    def from_dict(cls: Type[T], src_dict: Dict[str, Any]) -> T:
        from ..models.issue_credential_record import IssueCredentialRecord

        d = src_dict.copy()
        self_ = d.pop("self")

        kind = d.pop("kind")

        page_of = d.pop("pageOf")

        contents = []
        _contents = d.pop("contents")
        for contents_item_data in _contents:
            contents_item = IssueCredentialRecord.from_dict(contents_item_data)

            contents.append(contents_item)

        next_ = d.pop("next", UNSET)

        previous = d.pop("previous", UNSET)

        issue_credential_record_page = cls(
            self_=self_,
            kind=kind,
            page_of=page_of,
            contents=contents,
            next_=next_,
            previous=previous,
        )

        issue_credential_record_page.additional_properties = d
        return issue_credential_record_page

    @property
    def additional_keys(self) -> List[str]:
        return list(self.additional_properties.keys())

    def __getitem__(self, key: str) -> Any:
        return self.additional_properties[key]

    def __setitem__(self, key: str, value: Any) -> None:
        self.additional_properties[key] = value

    def __delitem__(self, key: str) -> None:
        del self.additional_properties[key]

    def __contains__(self, key: str) -> bool:
        return key in self.additional_properties
