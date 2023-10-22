package com.company.catalogue.backend.service;

import com.company.catalogue.backend.model.Company;
import com.company.catalogue.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CompanyService {
    private CompanyRepository repo;

    @Autowired
    public CompanyService(CompanyRepository repo) {
        this.repo = repo;
    }

    public Optional<Company> getCompany(long id) {
        return  repo.findById(id);
    }

    public List<Company> getAll() {
        return repo.findAll();
    }

    public Company addCompany(Company company) {
        return repo.save(company);
    }

    public void deleteCompany(long id) {
        repo.deleteById(id);
    }

    public Company updateCompany(Company update, long id) {
        Optional<Company> optionalCompany = repo.findById(id);

        if (optionalCompany.isPresent()) {
            Company company = optionalCompany.get();

            company.setName(update.getName());
            company.setDescription(update.getDescription());
            company.setIndustry(update.getIndustry());
            company.setEstablished(update.getEstablished());
            company.setLogo(update.getLogo());
            company.setWebsite(update.getWebsite());
            company.setLocation(update.getLocation());
            company.setOther_details(update.getOther_details());

            return repo.save(company);
        } else {
            return null;
        }
    }
}