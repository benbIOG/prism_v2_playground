from typing import Any, Dict, List, Type, TypeVar, cast

import attr

T = TypeVar("T", bound="ProofRequestAux")


@attr.s(auto_attribs=True)
class ProofRequestAux:
    """
    Example:
        {'schemaId': 'https://schema.org/Person', 'trustIssuers': ['did:web:atalaprism.io/users/testUser',
            'did.prism:123', 'did:prism:...']}

    Attributes:
        schema_id (str): The unique identifier of a schema the VC should comply with. Example:
            https://schema.org/Person.
        trust_issuers (List[str]): One or more issuers that are trusted by the verifier emitting the proof presentation
            request. Example: ['did:web:atalaprism.io/users/testUser', 'did.prism:123', 'did:prism:...'].
    """

    schema_id: str
    trust_issuers: List[str]
    additional_properties: Dict[str, Any] = attr.ib(init=False, factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        schema_id = self.schema_id
        trust_issuers = self.trust_issuers

        field_dict: Dict[str, Any] = {}
        field_dict.update(self.additional_properties)
        field_dict.update(
            {
                "schemaId": schema_id,
                "trustIssuers": trust_issuers,
            }
        )

        return field_dict

    @classmethod
    def from_dict(cls: Type[T], src_dict: Dict[str, Any]) -> T:
        d = src_dict.copy()
        schema_id = d.pop("schemaId")

        trust_issuers = cast(List[str], d.pop("trustIssuers"))

        proof_request_aux = cls(
            schema_id=schema_id,
            trust_issuers=trust_issuers,
        )

        proof_request_aux.additional_properties = d
        return proof_request_aux

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
