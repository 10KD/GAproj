package com.example.profilesapi.repositories;

import com.example.profilesapi.models.Profile;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, Long> {

}